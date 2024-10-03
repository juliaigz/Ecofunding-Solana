<script lang="ts">
	import { Button, Modal } from 'carbon-components-svelte';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
	import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
	import { onMount } from 'svelte';
	import { walletAddress } from '$lib/stores';
	import { goto } from '$app/navigation';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

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

				// Enviar la transacción usando Phantom Wallet
				const signature = await wallet.sendTransaction(transaction, connection);
				console.log('Firma de la transacción:', signature);

				// Confirmar la transacción
				const confirmation = await connection.confirmTransaction(signature, 'confirmed');
				console.log('Transacción confirmada:', confirmation);
			} catch (error) {
				console.error('Error en la transacción:', error);
			}
		} else {
			console.error('La wallet no está conectada');
			goto('/login');
		}
	}





	let open = false;
	let stepModal = 1;

	async function nextStep() {
		stepModal += 1;
		if(stepModal > 2 || stepModal < 1){
			open = false;
			stepModal = 1;

			await startTransaction();
		}
	}

	function closeModal(){
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
<!-- <Button on:click={() => (open = true)}>Create database</Button> -->

<Modal
	bind:open
	modalHeading={stepModal===1 ? "Confirm swap" : "Swap Details"}
	primaryButtonText="Confirm"
	secondaryButtonText="Cancel"
	on:click:button--primary={nextStep}
	on:click:button--secondary={closeModal}
	on:open
	on:close
	on:submit
>
	{#if stepModal === 1}
		<p>sd</p>
		
	{:else if stepModal === 2}
		<p>Paso2</p>
		<!-- {:else  }
								{() => {closeModal}} -->
	{/if}
	
</Modal>
