<script>
	import LogoEcoFunding from '$lib/images/imgFooterBurbujas.png';
	import { FluidForm, TextInput, PasswordInput } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
	import WalletConnect from '$lib/walletConnect.svelte';
</script>

<div class="boxPrincipal">
	<div class="head">
		<div class="boxImage-head">
			<img src={LogoEcoFunding} alt="Logo EcoFounding" />
		</div>
		<div class="boxText-head">
			<p>EcoFounding <strong>SOL</strong></p>
		</div>
	</div>

	<div class="Login_data">
		<FluidForm class="FluidForm">
			<div class="EmailForm">
				<label for="">Email</label>
				<TextInput  labelText="Insert Email" placeholder="Email" required />
			</div>
			<div class="PasswordForm">
				<label for="">Password</label>
				<PasswordInput
					required
					type="password"
					labelText="Password"
					placeholder="Enter password..."
				/>
			</div>
		</FluidForm>
		<div class="box-Buttons">
			<Button class="Button" kind="secondary">Log in</Button>
			<Button class="button-Second" kind="ghost">Sign up</Button>
			<Button class="button-Second" kind="ghost">Forgot Password</Button>
		</div>
	</div>

	<div class="Or_continue">
		<p>Or continue with</p>
	</div>
	<hr>
	
	<WalletConnect />
</div>

<style>
	.boxPrincipal {
		/* border: 1px solid black; */
		box-shadow: -1px -3px 5px 6px rgba(173, 173, 173, 0.99) inset;
		border-radius: 2%;
		width: 50%;
		height: 125vh;
		position: relative;
		left: 25%;
		padding: 5%;
	}

	.head {
		width: 100%;
		/* border: 1px solid red; */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Login_data {
		margin-top: 10%;
	}

	.Login_data :global(.FluidForm){
		/* border: 1px solid blue; */
		padding:0% 8%;
	}

	:global(.EmailForm) {
		/* border: 1px solid black; */
		margin-bottom: 9%;
	}


	.box-Buttons{
		display: flex;
		flex-direction: column;
	}

	.box-Buttons :global(.Button){
		margin-top: 5%;
		border-radius: 11px;
		position: relative;
		left: 20%;
	}

	.box-Buttons :global(.button-Second){
		position: relative;
		left: 20%;
	}


	.Or_continue{
		margin-top: 5%;	
		/* border: 1px solid red; */
	}

	.Or_continue p{
		text-align: center;
		color: gray;
	}

	




</style>
