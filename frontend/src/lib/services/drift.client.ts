import { Connection } from "@solana/web3.js";
import { Wallet, loadKeypair, DriftClient } from "@drift-labs/sdk";

export async function initializeDriftClient() {
    // Establish Solana connection

    const connection = new Connection(process.env.rpc);

    // Load the wallet keypair from file
    const keyPairFile = process.env.SOLANA_KEYPAIR_PATH;
    const env = process.env.enviroment
    console.log("env", env)
    console.log("keypair", keyPairFile)
    const wallet = new Wallet(loadKeypair(keyPairFile));

    // Create a new DriftClient
    const driftClient = new DriftClient({
        connection,
        wallet,
        env: env,
    });

    // Subscribe to the client
    await driftClient.subscribe();

    return driftClient; // Optionally return the initialized client
}
