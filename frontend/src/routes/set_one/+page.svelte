<script>
      import { ProgressIndicator, ProgressStep } from "carbon-components-svelte";
</script>




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