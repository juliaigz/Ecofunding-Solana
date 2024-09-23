<script>
	import { initializeDriftClient } from '$lib/services/drift.client';
	import { Button } from 'carbon-components-svelte';

	let init = async () => {
		const { initializeDriftClient } = await import('$lib/services/drift.client');
		let i = await initializeDriftClient();
		console.log(i);
		return i;
	};

	// no import() -> charge in 41s
</script>

<Button on:click={init}>Test</Button>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
