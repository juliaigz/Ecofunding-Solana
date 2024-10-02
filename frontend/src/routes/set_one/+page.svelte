<script>
	import { ProgressIndicator, ProgressStep } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { TextInput } from 'carbon-components-svelte';
	import { TextArea } from 'carbon-components-svelte';
	import { FileUploader } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
</script>

<Grid>
	<Row>
		<Column lg={7}>
			<ProgressIndicator preventChangeOnClick currentIndex={0}>
				<ProgressStep
					label="Step 1"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
					disabled
					label="Step 2"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
					disabled
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
				<h1>Let's start with your perfile</h1>
				<p>Tell us a bit about yourself and upload a photo so people can see who you are.</p>
			</div>
		</Column>
    <!---Form column-->
		<Column style="	box-shadow: -1px -3px 5px 6px rgba(173, 173, 173, 0.99) inset;
		display: flex;
		flex-direction: column;
		border-radius: 5%;
		padding: 5%;
		width: 100%;
		height: 120vh;">
				<div class="inputNameComp">
					<TextInput labelText="First name" placeholder="First Name"/>
					<TextInput labelText="Last name" placeholder="Last Name" />
				</div>

				<div class="inputBio">
					<TextArea labelText="Bio" helperText="Write about you" placeholder="Bio" maxCount={350} />
				</div>

				<div class="input_Profile_Picture">
					<FileUploader
						multiple
						labelTitle="Upload files"
						buttonLabel="Add files"
						labelDescription="Only JPEG files are accepted."
						accept={['.jpg', '.jpeg']}
						status="complete"
					/>
				</div>

				<Button
					class="buttonNext"
					style="position: relative; left: 25%; padding-left: 25%;  margin-top: 6%;"
					kind="secondary"
          href="/set_two"
				>
					Next
				</Button>
		</Column>
	</Row>
</Grid>

<style>
	.infoText {
		margin-top: 10%;
	}
  
  .infoText h1{
    font-weight: 500;
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

	.inputNameComp {
		width: 97%;
		display: inline-flex;
		gap: 5%;
	}

	.inputBio {
		margin-top: 15%;
	}

	.input_Profile_Picture {
		margin-top: 12%;
	}
</style>
