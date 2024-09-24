use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_instruction; // Importa las instrucciones del sistema

declare_id!("684gruPz6pRymjJz9LZ9kuRd85hmwdhGo9TUNEre6BEV");

#[program]
pub mod backend {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    pub fn transfer_sol(ctx: Context<Transfer>, amount: u64) -> Result<()> {
        // Lógica para transferir SOL
        let cpi_accounts = system_instruction::Transfer {
            from: *ctx.accounts.from.key,
            to: *ctx.accounts.to.key,
        };
        let cpi_program = ctx.accounts.system_program.to_account_info();
        let ix = system_instruction::transfer(&ctx.accounts.from.key(), &ctx.accounts.to.key(), amount);
        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                ctx.accounts.from.to_account_info(),
                ctx.accounts.to.to_account_info(),
                cpi_program,
            ],
        )?;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct Transfer<'info> {
    #[account(mut)]
    pub from: Signer<'info>, // La cuenta de origen (debe ser firmante)
    #[account(mut)]
    pub to: AccountInfo<'info>, // La cuenta de destino
    pub system_program: Program<'info, System>, // El programa del sistema
}

