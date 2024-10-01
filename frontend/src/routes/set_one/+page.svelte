<script>
      import { ProgressIndicator, ProgressStep } from "carbon-components-svelte";
      import { Grid, Row, Column } from "carbon-components-svelte";

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
        <p>Tell us a bit about yourself  and upload a photo so people can see who you are.</p>
      </div>
      

    </Column>
    <Column>
      <div class="setName">

      </div>
    </Column>
  </Row>
</Grid>


<style>
  .infoText{
    margin-top: 10%;
  }


  .setName{
   /* border: 1px solid black; */
		box-shadow: -1px -3px 5px 6px rgba(173, 173, 173, 0.99) inset;
		display: flex;
		flex-direction: column;
		border-radius: 5%;
		padding: 10%;
		width: 100%;
		height: 90vh;
  }
</style>