<script>
	import Sinba from '$lib/images/Sinba.jpg';
	import ColombiaAval from '$lib/images/ColombiaAval.png';
	import Reciclaje from '$lib/images/ Reciclaje.jpg';
	import { Grid, Row, Column, ImageLoader } from 'carbon-components-svelte';

	//*Importacion componentes carbon
	import { Button } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { Search } from 'carbon-components-svelte';

	//*Importaciones de las Imagenes de Perfil (Elipse)

	//Perfil Sinba
	import ElipseSinba from '$lib/images/ElipseSinba.png';

	//Perfil LUIS (colombia)
	import ElipseColombia from '$lib/images/ElipseColombia.png';

	//Perfil México
	import ElipseReciclaje from '$lib/images/ElipseReciclaje.png';

	//icon de ubicacion
	import bxs_map from '$lib/images/bxs_map.png';

	//OverflowMenu
	import { OverflowMenu, OverflowMenuItem } from 'carbon-components-svelte';
</script>

<div class="subTitulo">
	<h2>Donate to projects that matter to you</h2>
</div>

<div class="BoxSearch">
	<Search size="sm" />
</div>

<!--Grid sobre las secciones de inversión de Avales-->
<Grid narrow>
	<Row>
		<Column>Animals</Column>
		<Column>Reciclyng</Column>
		<Column>Nature</Column>
		<Column>Carbon footprint</Column>
		<Column>Agriculture</Column>
	</Row>
</Grid>
<hr />

<!--*CONTENEDOR SOBRE LA INFORMACIÓN SOBRE LAS INVERSIONES-->
<Grid narrow>
	<Row class={'class'} style=" grid-column-gap: 1rem;">
		<!--*Carta de la fundación Sinba-->
		<Column style="padding:1.43rem; background-color: #EEEEEE;">
			<ImageLoader
				src={Sinba}
				style="width: 12.75rem; height: 11.375rem; object-fit: cover;"
				alt="Aval sobre el proyecto Sinba"
			/>

			<div class="sinba">
				<img src={ElipseSinba} alt="Imagen de Perfil del Aval Sinba" />
				<h5>SINBA</h5>
				<OverflowMenu class="OverflowMenu" size="xl">
					<OverflowMenuItem text="Manage credentials" />
					<OverflowMenuItem
						href="https://cloud.ibm.com/docs/api-gateway/"
						text="API documentation"
					/>
					<OverflowMenuItem danger text="Delete service" />
				</OverflowMenu>
			</div>

			<div class="boxInfoCenter">
				<!--contendedor de ubicacion-->
				<div class="Ubicacion">
					<img src={bxs_map} alt="Icono de Ubicacions" />
					<h6>Lima, Peru</h6>
				</div>
				<p>
					This endorsement of 200 SOL is intended to strengthen Sinba's food and materials recycling
					management, which is an innovative project focused on waste reduction and the promotion of
					good practices.
				</p>
			</div>

			<Button
				icon={Add}
				href="/project"
				style="background-color:#59CF8C; width: 12.625rem; position: relative; left:25%;"
				>See project</Button
			>
		</Column>

		<!--*Carta de Colombia-->
		<Column
			style="
          padding:1.43rem;
          background-color: #EEEEEE;
        
        "
		>
			<ImageLoader
				src={ColombiaAval}
				style="width: 12.75rem; height: 11.375rem; object-fit: cover;"
				alt="Imagen sobre el aval de reciclaje Co"
			/>
			<div class="luis">
				<img src={ElipseColombia} alt="Imagen de Perfil del Aval Sinba" />
				<h5>AGRIFOOD</h5>
				<OverflowMenu class="OverflowMenu2" size="xl">
					<OverflowMenuItem text="Manage credentials" />
					<OverflowMenuItem
						href="https://cloud.ibm.com/docs/api-gateway/"
						text="API documentation"
					/>
					<OverflowMenuItem danger text="Delete service" />
				</OverflowMenu>
			</div>

			<!---Contendor de información ubicación, texto,etc.-->

			<div class="boxInfoCenter">
				<!--contendedor de ubicacion-->
				<div class="Ubicacion">
					<img src={bxs_map} alt="Icono de Ubicacions" />
					<h6>Cali, Colombia</h6>
				</div>

				<p>
					This guarantee of 150 SOL is intended to promote an innovative sustainable agriculture
					project. The project focuses on implementing agricultural practices that protect the
					environment, conserve natural resources and improve the quality of life of farmers and the
					community in general.
				</p>
			</div>

			<Button
				icon={Add}
				style="background-color:#59CF8C; width: 12.625rem; position: relative; left:25%;"
				>See project</Button
			>
		</Column>

		<!--*Carta de Reciclaje-->
		<Column
			style="
          padding:1.43rem;
          background-color: #EEEEEE;
          "
		>
			<ImageLoader
				src={Reciclaje}
				style="width: 12.75rem; height: 11.375rem; object-fit: cover;"
				alt="Imagen sobre el aval de reciclaje Co"
			/>
			<div class="victor">
				<img src={ElipseReciclaje} alt="Imagen de Perfil del Aval Sinba" />
				<h5>RECICLAME</h5>
				<OverflowMenu class="OverflowMenu3" size="xl">
					<OverflowMenuItem text="Manage credentials" />
					<OverflowMenuItem
						href="https://cloud.ibm.com/docs/api-gateway/"
						text="API documentation"
					/>
					<OverflowMenuItem danger text="Delete service" />
				</OverflowMenu>
			</div>

			<div class="boxInfoCenter">
				<!--contendedor de ubicacion-->
				<div class="Ubicacion">
					<img src={bxs_map} alt="Icono de Ubicacions" />
					<h6>Cancún, México</h6>
				</div>

				<p>
					This guarantee of 100 SOL is intended to promote an innovative recycling project. The
					objective of the project is to promote sustainability and responsible waste management
					through the implementation of advanced technologies and efficient recycling practices.
				</p>
			</div>

			<Button
				icon={Add}
				style="background-color:#59CF8C; width: 12.625rem; position: relative; left:25%;"
				>See project</Button
			>
		</Column>
	</Row>
</Grid>

<style>
	.BoxSearch {
		margin-top: 3%;
		margin-bottom: 5%;
		padding: 0% 9%;
	}

	.subTitulo {
		margin-top: 10.194rem;
		display: flex;
		justify-content: center;
	}

	/**Diseño del nombre y de la imagen de perfil*/
	.sinba {
		width: 11.875rem;
		height: 4.063rem;
		display: flex;
		align-items: center;
		margin-top: 1.25rem;
		margin-left: 10%;
	}

	.sinba img {
		margin-right: 0.4rem;
	}

	:global(.OverflowMenu) {
		margin-left: 88%;
	}

	:global(.OverflowMenu2) {
		margin-left: 73%;
	}

	:global(.OverflowMenu3) {
		margin-left: 68%;
	}

	.luis {
		width: 11.875rem;
		height: 4.063rem;
		display: flex;
		align-items: center;
		margin-top: 1.25rem;
		margin-left: 10%;
		/*border: 1px solid green;*/
	}

	.luis img {
		margin-right: 0.4rem;
	}

	.victor {
		width: 11.875rem;
		height: 4.063rem;
		display: flex;
		align-items: center;
		margin-top: 1.25rem;
		margin-left: 10%;
	}

	.victor img {
		margin-right: 0.4rem;
	}

	p {
		width: 12.625rem;
		height: 12.5rem;
		font-size: 1rem;
		width: 100%;
		margin-bottom: 8.375rem;
	}

	/***Contenedores de la Ubicacion con el Icono*/
	.Ubicacion {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1.25rem;
		margin-bottom: 2.25rem;
		width: 100%;
		/*border: 2px solid red; */
	}

	/*Esto diseño es sobre las 3 informaciones de cada carta*/
	.boxInfoCenter {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/*border: 1px solid black;*/
		margin: auto;
		padding: 0% 8%;
	}
</style>
