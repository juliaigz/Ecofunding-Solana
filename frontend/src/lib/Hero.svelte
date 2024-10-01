<script>
	import { AspectRatio } from 'carbon-components-svelte';

	//importación de la imagen home.png
	import home from '$lib/images/home.png';

	//Importacion de Grid
	import { Grid, Row, Column } from 'carbon-components-svelte';

    import { Button } from "carbon-components-svelte";
    import Add from "carbon-icons-svelte/lib/Add.svelte";
</script>

<AspectRatio>
	<Grid style="display:grid; height:100%; place-items: center;">
		<Row>
			<!--Columna de Texto-->
			<Column class="TextHero">
				<h2>Collective donations to benefit the environment</h2>
				<p>
					Use your SOLANA to support environmental projects. Tomorrow you could also be helped. Join
					Ecofunding and support sustainability.
				</p>

				<div class="BoxButton">
                    <Button style="background-color:#59CF8C;" icon={Add}>Find a project</Button>
				</div>
			</Column>

			<!--*Columna de Imagen-->
			<Column>
				<div>
					<img src={home} alt="Imagen de bievenida, una niña en un escritorio" />
				</div>
			</Column>
		</Row>
	</Grid>
</AspectRatio>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* :global(.TextHero){
        border: 1px solid green;
    }  */


    /**Design of the ‘TextHero’ column*/

	:global(.TextHero) h2 {
		margin-top: 6.6%;
		font-size: 3.3rem;
	}

	:global(.TextHero) p {
		margin-top: 10%;
		font-size: 1.56em;
	}

    .BoxButton{
        margin-top: 10%;
        position: relative;
        left: 35%;
    }




</style>
