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
			<ProgressIndicator preventChangeOnClick currentIndex={3}>
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
                    complete
					label="Step 3"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
				
					label="Step 4"
					description="The progress indicator will listen for clicks on the steps"
				/>
			</ProgressIndicator>

			<div class="infoText">
				<h1>Submit project</h1>
				<p>You are ready to submit your project</p>
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
        <InlineNotification
        lowContrast
        kind="warning"
        title="Important information:
        "
        subtitle="We are going to deposit the funds to the wallet with which you connected in the log in with this address:

              THdf7gMDbSiiRJDM7bassNwuXRr2BHbmpEAj39iFpW3  
        "
      />


      <Button
      class="buttonNext"
      style="position: relative; left: 25%; padding-left: 25%;  margin-top: 6%;"
      kind="secondary"
      href="/"
  >
      Next
  </Button>

  <Button
      style="position: relative; left: 25%; padding-left: 25%;  margin-top: 1%;"
      kind="ghost"
      href="/set_three"
      >Back</Button>

		</Column>
	</Row>
</Grid>


<style>

    .infoText{
        margin-top: 20%;
    }


    .infoText h1{
        font-weight:bold;
    }
</style>