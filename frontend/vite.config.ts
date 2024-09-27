import { sveltekit } from '@sveltejs/kit/vite';
import { optimizeCss } from 'carbon-preprocess-svelte';
import { defineConfig } from 'vite';
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

export default defineConfig({
	plugins: [sveltekit(), optimizeCss(),],
	// optimizeDeps: {
	// 	esbuildOptions: {
	// 		define: {
	// 			global: 'globalThis'
	// 		},
	// 		plugins: [
	// 			NodeGlobalsPolyfillPlugin({
	// 				buffer: true
	// 			})
	// 		]
	// 	},
	// 	include: ['@drift-labs/sdk'],
	// },
	define: {
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}
});
