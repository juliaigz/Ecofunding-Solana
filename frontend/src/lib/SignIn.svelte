<script>
	import { Button } from "carbon-components-svelte";
    
</script>

<Button class="SingIn" href="/login">
    Sign In
</Button>



<style>
    :global(.SingIn){
        margin-right: 5%;
        background-color: rgba(255, 255, 255, 0);
        font-size: 1.2em;
        font-weight: 600;
        
    }

    :global(.SingIn):hover{
        background-color:#c39ad56b;
    }

</style>
