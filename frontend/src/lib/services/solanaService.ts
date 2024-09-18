// src/lib/services/solanaService.ts

import { Connection, PublicKey, Transaction, SystemProgram, Keypair, sendAndConfirmTransaction } from '@solana/web3.js';

// Solana network configuration
const endpoint = 'https://api.mainnet-beta.solana.com'; // Change to 'testnet' or 'devnet' if needed
const connection = new Connection(endpoint, 'confirmed');

// Smart contract (program) address
const programId = new PublicKey('PROGRAM_PUBLIC_KEY_HERE'); // Replace with your smart contract's address

// Create or use an existing wallet
const wallet = Keypair.generate(); // Or use an existing keypair

// Function to interact with the smart contract
export async function interactWithProgram() {
    // Create a transaction
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey('RECIPIENT_PUBLIC_KEY_HERE'),
            lamports: 1000000, // Amount of lamports to transfer
        })
    );

    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(connection, transaction, [wallet]);

    console.log('Transaction confirmed with signature:', signature);
    return signature;
}
