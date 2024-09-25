import { Connection } from "@solana/web3.js";
import { Wallet, loadKeypair, DriftClient } from "@drift-labs/sdk";

export async function initializeDriftClient() {
    // Establecer conexión a Solana
    const rpcUrl = process.env.rpc || import.meta.env.VITE_RPC_URL;

    if (!rpcUrl || !rpcUrl.startsWith('http')) {
        throw new Error('Invalid or missing RPC URL. Ensure it starts with http:// or https://');
    }

    const connection = new Connection(rpcUrl);

    // Cargar el wallet keypair desde el archivo
    const keyPairFile = import.meta.env.VITE_SOLANA_KEYPAIR_PATH;

    if (!keyPairFile) {
        throw new Error('SOLANA_KEYPAIR_PATH is not defined. Please set it in your .env file.');
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

    return driftClient; // Retornar el cliente inicializado
}
