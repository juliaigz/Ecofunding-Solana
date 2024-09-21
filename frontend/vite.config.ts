import { sveltekit } from '@sveltejs/kit/vite';
import { optimizeCss } from 'carbon-preprocess-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), optimizeCss(),],
	optimizeDeps: {
		include: ['@drift-labs/sdk'],
	},
	define: {
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}
});
