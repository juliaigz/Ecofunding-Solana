<script>
	import project from '$lib/images/project.png';
	import loan from '$lib/images/loan.png';
	import money from '$lib/images/money.png';
	import bussines from '$lib/images/bussines.png';

	//Componente Carbon
	import { Grid, Row, Column, ImageLoader } from 'carbon-components-svelte';
</script>

<!-- Codigo from ‘How it works?’ section -->

<div class="howItWorks">
	<div class="howItWorks_Text">
		<h2>How it works?</h2>
		<p>Use your SOLANA to support environmental projects. Tomorrow you could also be helped.</p>
	</div>
</div>

<!--Diseño de las features-->

<Grid style="display: grid; row-gap: 2em;" narrow>
	<Row style="column-gap:2rem;">
		<!--*Carta1-->
		<Column
			style="background-color:#E6E6E6;
        width:29.188rem;
        height:21.563rem;     "
		>
			<div class="Features-Box">
				<h3>Choose a project</h3>
				<p>
					Log in with your ICP wallet and search by category and find an entreperneur to support
				</p>
			</div>

			<div class="ImageBox">
				<img src={project} alt="Imagen sobre ayudar a emprendedores del medio ambiente" />
			</div>
		</Column>

		<!--*Carta2-->
		<Column
			style="background-color:#EAFDF2;
      width:29.188rem;
      height:21.563rem;
      
      "
		>
			<div class="Features-Box">
				<h3>Make a move</h3>
				<p>You can help an entrepreneur who helps the environment by pledging your ICP</p>
			</div>

			<div class="ImageBox">
				<img src={loan} alt="Imagen sobre ayudar a emprendedores del medio ambiente" />
			</div>
		</Column>
	</Row>

	<!--*Fila2-->
	<Row style="column-gap: 2rem;">
		<!--*Carta3-->
		<Column
			style="background-color:#E2FAEE;
        width:29.188rem;
        height:21.563rem;
        
        "
		>
			<div class="Features-Box">
				<h3>Receive the refund</h3>
				<p>
					Whe borrowers pay their financing after the agreed period of time, your money will
					automatically be refunded.
				</p>
			</div>

			<div class="ImageBox">
				<img src={money} alt="Imagen sobre reciviendo fondos" />
			</div>
		</Column>

		<!--*Carta 4-->
		<Column
			style="background-color:#E6E6E6;
        width:29.188rem;
        height:21.563rem; "
		>
			<div class="Features-Box">
				<h3>Repeat</h3>
				<p>
					When borrowers pay their financing after the agreed period of time, your money will
					automatically be refunded.
				</p>
			</div>

			<div class="ImageBox">
				<img src={bussines} alt="Imagen sobre ayudar a emprendedores del medio ambiente" />
			</div>
		</Column>
	</Row>
</Grid>

<style>
	.howItWorks {
		width: 100%;
        height: 5rem;
        /* border: 1px solid red; */
        margin-top: 2%;
		margin-bottom: 3.5%;
	}

    .howItWorks_Text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

	.howItWorks_Text p {
        text-align: center;
        font-size: 1.15rem;
		padding: 0 9rem;
	}

	.Features-Box h3 {
		font-size: 1.5rem;
		/* border: 1px solid green; */
		margin-top: 2rem;
		margin-left: 7%;
		width: 23vw;
	}
	.Features-Box p {
		font-size: 1rem;
		width: 15vw;
		height: 15vh;
		margin-top: 6%;
		margin-left: 7%;
		/* border: 1px solid black; */
		position: relative;
	}

	.ImageBox {
		/*border: 1px solid green;*/
		width: 22vw;
		position: relative;
		left: 43%;
		bottom: 35%;
	}

	.ImageBox img {
		padding: 0px;
		object-fit: cover;
		width: 22vw;

		/* position: relative;
        left: 45%;
         border: 1px solid black;  
         */
	}
</style>
