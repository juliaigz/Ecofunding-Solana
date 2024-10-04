<script lang="ts">
	import { Button, Modal, ToastNotification } from 'carbon-components-svelte';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
	import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
	import { onMount } from 'svelte';
	import { walletAddress } from '$lib/stores';
	import { goto } from '$app/navigation';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import iconSolana from '$lib/images/sol.png';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import iconUSDT from '$lib/images/usdt.png';
	import { Accordion, AccordionItem } from 'carbon-components-svelte';
	import { fade } from 'svelte/transition';

	// Props
	export let recipient: string; // Wallet destino para el SOL
	export let amount: number; // Cantidad de SOL a enviar

	let wallet: PhantomWalletAdapter;

	// Red Solana
	const endpoint = 'https://api.devnet.solana.com'; // Cambiar a devnet para pruebas
	let connection: Connection;

	onMount(() => {
		connection = new Connection(endpoint);
		wallet = new PhantomWalletAdapter();
	});

	function getCurrentDate() {
		const today = new Date(); // Obtener la fecha actual
		const day = String(today.getDate()).padStart(2, '0'); // Obtener el día y asegurarse de que tenga dos dígitos
		const month = String(today.getMonth() + 1).padStart(2, '0'); // Obtener el mes (sumar 1 porque los meses comienzan en 0)
		const year = today.getFullYear(); // Obtener el año

		return `${month}/${day}/${year}`; // Retornar la fecha en el formato deseado
	}

	function convertSolanaToUSDT(solanaAmount) {
		// Supongamos que el valor de 1 SOL = 20 USDT (este valor puede variar)
		const conversionRate = 140; // Valor fijo para la conversión (actualízalo según el mercado)

		// Realizamos la conversión
		const usdtAmount = solanaAmount * conversionRate;

		return usdtAmount;
	}

	// Función para iniciar la transacción de SOL
	async function startTransaction() {
		if (walletAddress) {
			try {
				// Crear la transacción de transferencia de SOL
				await wallet.autoConnect();
				const transaction = new Transaction().add(
					SystemProgram.transfer({
						fromPubkey: wallet.publicKey,
						toPubkey: new PublicKey(recipient),
						lamports: amount * 1_000_000_000 // Convertir de SOL a lamports (1 SOL = 1,000,000,000 lamports)
					})
				);

				let headersList = {
					'Content-Type': 'application/json'
				};

				const transactionData = JSON.stringify({
					backer: wallet.publicKey,
					fecha: getCurrentDate(),
					solana: amount,
					usdt: convertSolanaToUSDT(amount)
				});

				// Enviar la transacción usando Phantom Wallet
				const signature = await wallet.sendTransaction(transaction, connection);
				console.log('Firma de la transacción:', signature);

				// Confirmar la transacción
				const confirmation = await connection.confirmTransaction(signature, 'confirmed');

				console.log('Transacción confirmada:', confirmation);
				const sendTransactionData = await fetch('http://127.0.0.1:8000/add', {
					method: 'POST',
					body: transactionData,
					headers: headersList
				});
				timeout = 6_000;
				amount = 0;
				console.log(sendTransactionData);
			} catch (error) {
				console.error('Error en la transacción:', error);
			}
		} else {
			console.error('La wallet no está conectada');
			goto('/login');
		}
	}
	let timeout = undefined;
	$: showNotification = timeout !== undefined;

	let open = false;
	let stepModal = 1;

	async function nextStep() {
		stepModal += 1;
		if (stepModal > 2 || stepModal < 1) {
			open = false;
			stepModal = 1;

			await startTransaction();
		}
	}

	function closeModal() {
		open = false;
		stepModal = 1;
	}
</script>

<!-- Botón para iniciar la transacción -->
<Button
	icon={Add}
	style="width: 60%; position: relative; left: 20%; top:1%; background-color:#59CF8C; margin-top: 2%;"
	on:click={() => (open = true)}>Fund this project</Button
>

{#if showNotification}
	<div transition:fade>
		<ToastNotification
			{timeout}
			kind="success"
			title="Success Transaction"
			subtitle="You donated {amount} SOL, equivalent to {convertSolanaToUSDT(amount)} USDT."
			caption={new Date().toLocaleString()}
			on:close={(e) => {
				timeout = undefined;
				console.log(e.detail.timeout); // true if closed via timeout
			}}
		/>
	</div>
{/if}

<Modal
	bind:open
	modalHeading={stepModal === 1 ? 'Confirm swap' : 'Swap Details'}
	primaryButtonText="Confirm"
	secondaryButtonText="Cancel"
	on:click:button--primary={nextStep}
	on:click:button--secondary={closeModal}
	on:open
	on:close
	on:submit
>
	{#if stepModal === 1}
		<div class="ImageIcon">
			<div class="iconSolana">
				<img src={iconSolana} alt="icon Solana" />
				<div class="youPay solana">
					<p>You pay</p>
					<p>0.01 SOL</p>
				</div>
			</div>
			<div class="iconUSDT">
				<img src={iconUSDT} alt="Icon USDT" />
				<div class="youPay">
					<p>You receive</p>
					<p>1.55 USDT</p>
				</div>
			</div>
		</div>
		<Grid>
			<Row class="Row">
				<Column>Price</Column>
				<Column>1 SOL = 155.54 $</Column>
			</Row>
			<Row class="Row">
				<Column>Price impact</Column>
				<Column>0.00%</Column>
			</Row>
			<Row class="Row">
				<Column>Slippage tolerance</Column>
				<Column>0.50%</Column>
			</Row>
			<Row class="Row">
				<Column>Minimun received</Column>
				<Column>1.55 USDT</Column>
			</Row>
			<Row class="Row">
				<Column>Estimated transfer fee for the swap</Column>
				<Column>0.0001 SOL</Column>
			</Row>
			<Row class="Row">
				<Column></Column>
				<Column>0.155 USDT</Column>
			</Row>
		</Grid>
	{:else if stepModal === 2}
		<div class="DepositSol">
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="title">
						<h5>1. Deposit SOL</h5>
					</svelte:fragment>
					<div class="DepositBox">
						<div class="moneda__Amount">
							<p>Amout</p>
						</div>
						<div class="iconAmount">
							<img src={iconSolana} alt="Icon solana" />
							<p>0.01 SOL</p>
						</div>
					</div>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="title">
						<h5>2. Swap SOL to USDT</h5>
					</svelte:fragment>
					<div class="SwapInfo">
						<div class="SwapSol">
							<p>Amout</p>
							<p>USDT</p>
						</div>
						<div class="iconSol_USDT">
							<div class="imagenUno">
								<img src={iconSolana} alt="Icon solana" />
								<p>0.01 SOL</p>
							</div>
							<div class="imagenDos">
								<img src={iconUSDT} alt="Icon USDT" />
								<p>1.55 USDT</p>
							</div>
						</div>
					</div>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="title">
						<h5>3. Transfer USDT</h5>
					</svelte:fragment>
					<div class="DepositBox">
						<div class="monedaUSDT">
							<p>USDT</p>
						</div>
						<div class="TransferUSDT">
							<img src={iconUSDT} alt="Icon USDT" />
							<p></p>
						</div>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	{/if}
</Modal>

<style>
	.ImageIcon {
		background-color: #cccbcb;
		border-radius: 8px;
	}

	.iconSolana {
		display: flex;
		align-items: center;
		border-bottom: 2.9px solid black;
	}

	.iconSolana img {
		margin-left: 3.7%;
	}

	.iconUSDT {
		display: flex;
		align-items: center;
	}

	.iconUSDT img {
		margin-left: 5%;
	}
	.youPay {
		display: flex;
		flex-direction: column;
		margin-left: 10%;
	}

	.solana {
		margin-left: 8%;
	}

	.youPay p:nth-child(2) {
		font-weight: bold;
		font-size: 2em;
	}

	/* Swap details */

	/* 1 Deposit SOL */
	.DepositBox {
		display: flex;
		justify-content: space-between;
	}

	.iconAmount {
		display: flex;
		align-items: center;
	}

	.iconAmount img {
		width: 2.2rem;
	}

	/* 2 Swap SOL to USDT */

	.SwapInfo {
		display: flex;
		align-items: flex-start;
	}

	.iconSol_USDT {
		display: flex;
		flex-direction: column;
		margin-left: 50%;
		width: 100%;
	}

	.iconSol_USDT .imagenUno {
		display: flex;
	}

	.iconSol_USDT .imagenUno img {
		width: 2rem;
	}

	.iconSol_USDT .imagenDos {
		display: flex;
	}

	.iconSol_USDT .imagenDos img {
		width: 1.7rem;
	}

	/* 3 transfer USDT */
	.DepositBox {
		display: flex;
		align-items: flex-start;
	}

	.DepositBox .TransferUSDT {
		margin-left: 80%;
		display: flex;
		align-items: center;
		gap: 5%;
	}

	.TransferUSDT img {
		width: 2rem;
	}

	:global(.Row) {
		margin: 2%;
	}
</style>
