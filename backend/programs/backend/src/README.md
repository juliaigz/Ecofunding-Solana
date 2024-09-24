EJEMPLO para llamar a la funcion desde javascript
Gentileza de CHATGPT

import { Connection, PublicKey, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';

const { SystemProgram: SystemProgramAnchor } = web3;

// Configura la conexión a la red de Solana
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

// Reemplaza con la ID de tu programa
const programId = new PublicKey('684gruPz6pRymjJz9LZ9kuRd85hmwdhGo9TUNEre6BEV');

async function transferSol(from, to, amount) {
    const provider = Provider.local(connection);
    const program = new Program(idl, programId, provider);

    // Convierte el monto a lamports, se puede obviar la multiplicacion y el monto se ingresa directo en lamports que segun entiendo es 1,000,000,000 parte de SOL
    const lamports = amount * web3.LAMPORTS_PER_SOL;

    // Llama a la función de transferencia en el programa
    await program.rpc.transferSol(new web3.BN(lamports), {
        accounts: {
            from: from.publicKey,
            to: new PublicKey(to),
            systemProgram: SystemProgramAnchor.programId,
        },
        signers: [from], // Firma la transacción con la cuenta de origen
    });

    console.log('Transferencia completada');
}

// Ejemplo de uso
async function main() {
    // Crea un Keypair a partir de una clave privada (asegúrate de manejarlo de forma segura)
    const from = Keypair.fromSecretKey(new Uint8Array([/* tu clave privada aquí */]));
    const to = 'DirecciónDeLaCuentaDeDestino'; // Reemplaza con la dirección real
    const amount = 1; // Monto en SOL

    await transferSol(from, to, amount);
}

main().catch(err => {
    console.error(err);
});


el ideal sería tener un pequeño formulario con el monto y clave privada de parte del cliente, el boton de donar deberia tener preconfigurado la publickey del receptor, ahora ustedes manejan mejor como funciona con eso del inicio de la wallet y puede que de ahi se saque el publickey del que envia sino tambien habria que pedirlo. No está demás señalizar que los espacios como "tu clave privada aquí" se deben reemplazar con los valores recuperados en formulario y demás.