import { writable } from 'svelte/store';

// Crear un store para la dirección de la wallet
export const walletAddress = writable<string>('');
