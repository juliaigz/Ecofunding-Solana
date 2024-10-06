<script>
	import { ProgressIndicator, ProgressStep } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { TextInput } from 'carbon-components-svelte';
	import { MultiSelect } from 'carbon-components-svelte';
	import { TextArea } from 'carbon-components-svelte';
	import { FileUploader } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
	import { NumberInput } from 'carbon-components-svelte';
	import logoSolana from '$lib/images/Solana_cryptocurrency_two 1.png';
	import { InlineNotification } from 'carbon-components-svelte';
    import WalletConnect from '$lib/walletConnect.svelte';

</script>

<Grid>
	<Row>
		<Column lg={7}>
			<ProgressIndicator preventChangeOnClick currentIndex={2}>
				<ProgressStep
					complete
					label="Step 1"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
					complete
					label="Step 2"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
					label="Step 3"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
					disabled
					label="Step 4"
					description="The progress indicator will listen for clicks on the steps"
				/>
			</ProgressIndicator>

			<div class="infoText">
				<h1>Set your target</h1>
				<p>How Much are you looking to raise</p>
			</div>
		</Column>
		<!-- Form column -->
		<Column
			style="	box-shadow: -1px -3px 5px 6px rgba(173, 173, 173, 0.99) inset;
		display: flex;
		flex-direction: column;
		border-radius: 5%;
		padding: 5%;
		width: 100%;
		height: 120vh;"
		>
			<h2>How much would you like to raise</h2>

			<div class="targetAmount">
				<NumberInput class="Amount" hideSteppers label="Clusters" value={0} />
				<div class="SolanaLogo">
					<img src={logoSolana} alt="Icon Solana" />
					<p>solana</p>
				</div>
			</div>
			<InlineNotification
				lowContrast
				kind="info"
				title="New updates:"
				subtitle="Restart to get the latest updates."
			/>

            <div class="parrafo">
                <p>Wich wallet we deposit the money into?</p>
            </div>

                 <WalletConnect /> 
       

            <Button
            class="buttonNext"
            style="position: relative; left: 25%; padding-left: 10em;   margin-top: 6%;"
            kind="secondary"
            href="/set_four"
        >
            Next
        </Button>

        <Button
            style="position: relative; left: 25%; padding-left: 10em;   margin-top: 1%;"
            kind="ghost"
            href="/set_two"
            >Back</Button
        >

		</Column>
	</Row>
</Grid>

<style>
	.infoText {
		margin-top: 10%;
	}

	/* .setName { */
	/* border: 1px solid black; */
	/* box-shadow: -1px -3px 5px 6px rgba(173, 173, 173, 0.99) inset;
		display: flex;
		flex-direction: column;
		border-radius: 5%;
		padding: 10%;
		width: 100%;
		height: 120vh; */
	/* } */

	h2 {
		font-weight: bold;
	}

	.targetAmount {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.targetAmount :global(.Amount) {
		width: 50%;
		/* border: 1px solid black; */
	}

	.SolanaLogo {
		/* border: 1px solid black; */
		position: relative;
		right: 40%;
		top: 16%;
		display: flex;
		align-items: center;
		width: 20%;
	}

    .parrafo{
        width: 100%;
        margin-top: 8%;
    }
    .parrafo p{
        color: gray;
        text-align: center;
    }
</style>
