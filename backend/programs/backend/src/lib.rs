#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use anchor_lang::solana_program::{system_program, pubkey::Pubkey}; // Importa las instrucciones del sistema

declare_id!("684gruPz6pRymjJz9LZ9kuRd85hmwdhGo9TUNEre6BEV");

#[program]
pub mod backend {
    use super::*;

    pub fn transfer_sol(ctx: Context<Transfer>, amount: u64) -> Result<()> {
        // Lógica para transferir SOL
        let payer = &mut ctx.accounts.payer;
        let recipient = &mut ctx.accounts.recipient;

        let lamports = payer.lamports();
        if lamports < amount {
            return Err(ErrorCode::InsufficientFunds.into());
        }

        **payer.try_borrow_mut_lamports()? -= amount;
        **recipient.try_borrow_mut_lamports()? += amount;

        Ok(())
    }
}


#[derive(Accounts)]
pub struct Transfer<'info> {
    #[account(mut)]
    payer: Signer<'info>, // La cuenta de origen (debe ser firmante)
    #[account(mut)]
    recipient: AccountInfo<'info>, // La cuenta de destino
}

#[error]
pub enum ErrorCode {
    #[msg("Insufficient funds in payer's account")]
    InsufficientFunds,
}