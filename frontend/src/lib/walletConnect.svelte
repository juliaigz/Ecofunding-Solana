<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
	import { Connection, clusterApiUrl } from '@solana/web3.js';
	import { onMount } from 'svelte';
	import { walletAddress } from '$lib/stores'; // Import the walletAddress store
	import logoPhantom from '$lib/images/logo_phatom.png';

	let wallet: PhantomWalletAdapter;
	let connected = false;
	let publicKey: string = '';

	// Solana network configuration
	const endpoint = clusterApiUrl('mainnet-beta'); // Change to 'testnet' or 'devnet' as needed
	let connection: Connection;

	onMount(() => {
		// Initialize Solana connection and Phantom wallet
		connection = new Connection(endpoint);
		wallet = new PhantomWalletAdapter();
		console.log(wallet); // Log wallet status: Installed | NotDetected | Loadable | Unsupported
	});

	// Connect to Phantom wallet
	async function connectWallet() {
		try {
			await wallet.connect();
			connected = true;
			publicKey = wallet.publicKey?.toString() || ''; // Set public key or empty string
			walletAddress.set(publicKey); // Update store with public key
			console.log('Connected with address:', publicKey);
		} catch (error) {
			console.error('Error connecting wallet:', error);
		}
	}

	// Disconnect from Phantom wallet
	async function disconnectWallet() {
		try {
			if (wallet.connected) {
				await wallet.disconnect();
				connected = false;
				publicKey = ''; // Clear public key
				walletAddress.set(publicKey); // Clear store
				console.log('Wallet disconnected');
			} else {
				console.log('Wallet is already disconnected');
			}
		} catch (error) {
			console.error('Error disconnecting wallet:', error);
		}
	}
</script>

<!-- Button to connect or disconnect wallet -->
{#if connected && publicKey}
	<Button on:click={disconnectWallet} style="background-color:#59CF8C;">Disconnect Wallet</Button>
{:else}
	<Button on:click={connectWallet} class="buttonConnect">Continue with Phantom <img src={logoPhantom} alt="Icono Phantom wallet"></Button>
{/if}



<style>

	:global(.buttonConnect){
		background-color:#CF9FFF;
		width: 70%;
		border-radius: 8%;
		position: relative;
		left: 20%;
	}

	:global(.buttonConnect):hover{
		background-color:#a473d4d8;
	}


	/* :global(.buttonConnect) img{
		
	} */
</style>