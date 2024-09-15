<script>
	import 'carbon-components-svelte/css/all.css'; // https://github.com/carbon-design-system/carbon-components-svelte?tab=readme-ov-file
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { Content } from 'carbon-components-svelte';

	// https://carbon-icons-svelte.onrender.com/
	// https://carbon-pictograms-svelte.onrender.com/
</script>

<Navbar />
<Content>
	<slot />
</Content>
<Footer />

<style>
	* {
		padding: 0px;
		margin: 0px;
	}
</style>
