# Ecofunding-Solana
EcoFunding-Solana is an innovative blockchain-based platform leveraging the power of Solana to facilitate solidarity donation for environmentally-focused projects. Our mission is to empower communities and individuals dedicated to sustainability by providing them with the financial resources.

## Generating and Verifying a Solana Wallet

Follow these steps to create and verify a wallet in Solana:

1. **Generate a new wallet**:
   ```bash
   solana-keygen new --outfile ./wallets/<wallet-name>.json
   ```

2. **Retrieve the public key of the wallet**:
   ```bash
   solana-keygen pubkey ./wallets/<wallet-name>.json
   ```

3. **Verify the public key**:
   ```bash
   solana-keygen verify <PUBKEY> ./wallets/<wallet-name>.json
   ```