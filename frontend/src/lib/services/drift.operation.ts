import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { DriftClient } from "@drift-labs/sdk";
import { Transaction } from '@solana/web3.js';

async function executeTrade(wallet: PhantomWalletAdapter, driftClient: DriftClient) {
    try {
        await wallet.connect();

        const publicKey = wallet.publicKey;
        if (!publicKey) throw new Error('No public key found');

        // Construir una transacción con Drift para que el usuario la firme
        const transaction = new Transaction();

        // Añadir instrucciones para el trade
        const instruction = await driftClient.placeOrder({
            user: publicKey, // El usuario firmará la transacción
            side: 'sell',
            price: 100,
            size: 1,
            market: 'SOL/USDT',
        });

        transaction.add(instruction);

        // Solicitar firma al usuario
        const signedTransaction = await wallet.signTransaction(transaction);

        // Enviar la transacción firmada
        const txId = await driftClient.connection.sendRawTransaction(signedTransaction.serialize());
        console.log('Transaction sent with ID:', txId);
    } catch (error) {
        console.error('Error executing trade:', error);
    }
}
