<script>
	import { ProgressIndicator, ProgressStep } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { TextInput } from 'carbon-components-svelte';
	import { MultiSelect } from 'carbon-components-svelte';
	import { TextArea } from 'carbon-components-svelte';
	import { FileUploader } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
</script>

<Grid>
	<Row>
		<Column lg={7}>
			<ProgressIndicator preventChangeOnClick currentIndex={1}>
				<ProgressStep
					complete
					label="Step 1"
					description="The progress indicator will listen for clicks on the steps"
				/>
				<ProgressStep
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
				<h1>Tell us more about your</h1>
				<p>What's your project title? write your project</p>
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
		height: 220vh;"
		>
			<div class="setName">
				<TextInput labelText="Project Name" placeholder="Project Name" />
			</div>

			<div class="MultiSelect">
				<MultiSelect
					titleText="Contact"
					label="Select contact methods..."
					items={[
						{ id: '0', text: 'Animals' },
						{ id: '1', text: 'Recycling' },
						{ id: '2', text: 'Nature' },
						{ id: '3', text: 'Carbon footprint' }
					]}
					sortItem={() => {}}
				/>
			</div>

			<div class="inputSocialMedia">
				<TextInput labelText="Twitter Profile" placeholder="twitter.com/" />
				<TextInput labelText="Discord Profile" placeholder="discord.gg/" />
			</div>

			<div class="inputProjectStory">
				<TextArea
					labelText="Tell us your project story"
					placeholder="Project story"
					maxCount={1000}
				/>
			</div>

			<div class="inputFundsRaised">
				<TextArea
					labelText="What will the funds raised be used for?"
					helperText="You can add links"
					placeholder="The funds raised will be utilized to:"
					maxCount={1000}
				/>
			</div>

			<div class="inputTimeline">
				<TextArea
					labelText="Tell us your project Timeline and Key Milestones"
					helperText="use quarters to describe"
					placeholder="Project Timeline and Key Milestones"
					maxCount={1000}
				/>
			</div>

			<div class="input_Project_Picture">
				<FileUploader
					multiple
					labelTitle="Upload files"
					buttonLabel="Add files"
					labelDescription="Share some pictures or designs of your project. The first image you upload will be the main photo of the project, the following ones will go in an image gallery. Max file size is 500kb. Supported file types are .jpg and .png."
					accept={['.jpg', '.png']}
					status="complete"
				/>
			</div>

			<Button
				class="buttonNext"
				style="position: relative; left: 25%; padding-left: 25%;  margin-top: 6%;"
				kind="secondary"
				href="/set_three"
			>
				Next
			</Button>

			<Button
				style="position: relative; left: 25%; padding-left: 25%;  margin-top: 1%;"
				kind="ghost"
                href="/set_one"
                >Back</Button
			>
		</Column>
	</Row>
</Grid>

<style>
	.infoText {
		margin-top: 10%;
	}

    .infoText h1{
        font-weight: bold;
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

	.MultiSelect {
		margin-top: 6%;
	}

	.inputSocialMedia {
		width: 97%;
		display: inline-flex;
		gap: 5%;
		margin-top: 8%;
	}

	.inputProjectStory {
		margin-top: 8%;
	}

	.inputFundsRaised {
		margin-top: 8%;
	}

	.inputTimeline {
		margin-top: 8%;
	}

	.input_Project_Picture {
		margin-top: 9%;
	}
</style>
