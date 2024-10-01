<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
	import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
	import { onMount } from 'svelte';
	import { walletAddress } from '$lib/stores';
	import { goto } from '$app/navigation';
	import WalletConnect from './walletConnect.svelte';

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
</script>

<!-- Botón para iniciar la transacción -->
<Button on:click={startTransaction} style="background-color:#59CF8C;">funded this project</Button>
<WalletConnect />
