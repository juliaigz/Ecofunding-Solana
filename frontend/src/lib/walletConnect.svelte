<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
	import { Connection, clusterApiUrl } from '@solana/web3.js';
	import { onMount } from 'svelte';

	let wallet: PhantomWalletAdapter;
	let connected = false;
	let publicKey = '';

	// Configuración de la red Solana
	const endpoint = clusterApiUrl('mainnet-beta'); // Puedes cambiar a 'testnet' o 'devnet'
	let connection = null;

	onMount(() => {
		// Inicializar la conexión a Solana y la wallet Phantom
		connection = new Connection(endpoint);
		wallet = new PhantomWalletAdapter();
		console.log(wallet); // Installed | NotDetected | Loadable | Unsupported
	});

	// Función para conectar la wallet Phantom
	async function connectWallet() {
		try {
			await wallet.connect();
			connected = true;
			// @ts-ignore
			publicKey = wallet.publicKey?.toString();
			console.log('Conectado con la dirección:', publicKey);
		} catch (error) {
			console.error('Error al conectar la wallet:', error);
		}
	}

	async function disconnectWallet() {
		try {
			if (wallet.connected) {
				await wallet.disconnect();
				connected = false;
				console.log('Wallet desconectada');
			} else {
				console.log('La wallet ya está desconectada');
			}
		} catch (error) {
			console.error('Error al desconectar la wallet:', error);
		}
	}
</script>

<!-- Botón para conectar la wallet -->

#{#if connected}
	<Button on:click={disconnectWallet} style="background-color:#59CF8C;">Disconnect Wallet</Button>
{:else}
	<Button on:click={connectWallet} style="background-color:#59CF8C;">Connect Wallet</Button>
{/if}
