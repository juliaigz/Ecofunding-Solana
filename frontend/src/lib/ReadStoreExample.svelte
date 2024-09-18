<script lang="ts">
	import { walletAddress } from '$lib/stores'; // Importa el store

	let address: string;

	// Suscribirse al store para obtener la dirección de la wallet
	walletAddress.subscribe((value) => {
		address = value;
	});
</script>

<p>Dirección de la wallet: {address}</p>
