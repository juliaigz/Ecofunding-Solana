// src/routes/api/drift/+server.ts
import { json } from '@sveltejs/kit';
import { Connection } from "@solana/web3.js";
import { Wallet, loadKeypair, DriftClient } from "@drift-labs/sdk";

// Función para manejar la solicitud GET
export async function GET(event) {
    try {
        // Establecer conexión a Solana
        const rpcUrl = import.meta.env.VITE_RPC_URL || event.url.searchParams.get('rpc');

        if (!rpcUrl || !rpcUrl.startsWith('http')) {
            return json({ success: false, error: 'Invalid or missing RPC URL.' }, { status: 400 });
        }

        const connection = new Connection(rpcUrl);

        // Cargar el wallet keypair desde el archivo
        const keyPairFile = import.meta.env.VITE_SOLANA_KEYPAIR_PATH;

        if (!keyPairFile) {
            return json({ success: false, error: 'SOLANA_KEYPAIR_PATH is not defined.' }, { status: 400 });
        }

        const wallet = new Wallet(loadKeypair(keyPairFile));

        // Crear un nuevo DriftClient
        const driftClient = new DriftClient({
            connection,
            wallet,
            env: import.meta.env.VITE_ENVIRONMENT,
        });

        // Suscribirse al cliente
        await driftClient.subscribe();

        return json({ success: true, client: driftClient });
    } catch (error) {
        console.error('Error initializing DriftClient:', error);
        return json({ success: false, error: error.message }, { status: 500 });
    }
}
