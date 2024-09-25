EJEMPLO para llamar a la funcion desde javascript
Gentileza de CHATGPT

import { Connection, PublicKey, Transaction, SystemProgram, Keypair } from '@solana/web3.js';

async function transferSol(payerSecret, recipientPublicKey, amount) {
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

    const payer = Keypair.fromSecretKey(Uint8Array.from(payerSecret));
    const recipient = new PublicKey(recipientPublicKey);

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: recipient,
            lamports: amount,
        })
    );

    const signature = await connection.sendTransaction(transaction, [payer]);
    await connection.confirmTransaction(signature);

    console.log('Transfer successful:', signature);
}

// Uso
const payerSecret = [/* tu clave secreta en formato Uint8Array */];
const recipientPublicKey = "RECEIVER_PUBLIC_KEY_HERE";
const amount = 1000000; // 1 SOL en lamports

transferSol(payerSecret, recipientPublicKey, amount);


el ideal sería tener un pequeño formulario con el monto y clave privada de parte del cliente, el boton de donar deberia tener preconfigurado la publickey del receptor, ahora ustedes manejan mejor como funciona con eso del inicio de la wallet y puede que de ahi se saque el publickey del que envia sino tambien habria que pedirlo. No está demás señalizar que los espacios como "tu clave privada aquí" se deben reemplazar con los valores recuperados en formulario y demás.