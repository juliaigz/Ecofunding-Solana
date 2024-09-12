use anchor_lang::prelude::*;

declare_id!("684gruPz6pRymjJz9LZ9kuRd85hmwdhGo9TUNEre6BEV");

#[program]
pub mod backend {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
