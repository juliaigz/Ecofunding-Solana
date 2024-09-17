<script>
	import { Button } from 'carbon-components-svelte';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
	import { Connection, clusterApiUrl } from '@solana/web3.js';
	import { onMount } from 'svelte';

	let wallet = null;
	let connected = false;
	let publicKey = '';

	// Configuración de la red Solana
	const endpoint = clusterApiUrl('mainnet-beta'); // Puedes cambiar a 'testnet' o 'devnet'
	let connection = null;

	onMount(() => {
		// Inicializar la conexión a Solana y la wallet Phantom
		connection = new Connection(endpoint);
		wallet = new PhantomWalletAdapter();
	});

	// Función para conectar la wallet Phantom
	async function connectWallet() {
		try {
			await wallet.connect();
			connected = true;
			publicKey = wallet.publicKey.toString();
			console.log('Conectado con la dirección:', publicKey);
		} catch (error) {
			console.error('Error al conectar la wallet:', error);
		}
	}
</script>

<!-- Botón para conectar la wallet -->
<Button on:click={connectWallet} style="background-color:#59CF8C;">
	{#if connected}
		Wallet Connected: {publicKey}
	{/if}
	{#if !connected}
		Connect Wallet
	{/if}
</Button>
