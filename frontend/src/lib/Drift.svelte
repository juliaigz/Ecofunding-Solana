<script lang="ts">
	import { Button } from 'carbon-components-svelte';

	let loading = false; // Estado de carga
	let driftClient; // Para almacenar el DriftClient

	// Función para inicializar DriftClient llamando a la API
	let init = async () => {
		loading = true; // Activar estado de carga
		try {
			// Hacemos una petición GET al endpoint de la API
			const response = await fetch('/api/drift');
			const data = await response.json();

			if (data.success) {
				console.log('DriftClient initialized successfully:', data.clientInfo); // Muestra información relevante
				driftClient = data.clientInfo; // Guarda el cliente en la variable
			} else {
				throw new Error(data.error || 'Failed to initialize DriftClient.');
			}
		} catch (error) {
			console.error('Error initializing DriftClient:', error);
		} finally {
			loading = false; // Desactivar estado de carga
		}
	};
</script>

<Button on:click={init} disabled={loading}>
	{loading ? 'Loading...' : 'Test'}
</Button>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if loading}
	<p>Loading...</p>
	<!-- Mensaje de carga -->
{/if}
