<script>
	import { Search } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { NumberInput } from 'carbon-components-svelte';
	import { Button } from 'carbon-components-svelte';
	import { Content } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { ProgressBar } from 'carbon-components-svelte';
	import { OrderedList, ListItem, Link, UnorderedList } from 'carbon-components-svelte';
	import { DataTable } from 'carbon-components-svelte';

	//import perfilIcon from
	import Sinba from '$lib/images/Sinba.jpg';
	import ImgLocation from '$lib/images/bxs_map.png';
	import ElipseSinba from '$lib/images/ElipseSinba.png';

	//Photo gallery for the carousel

	import Sinba1 from '$lib/images/carouselSinba1.jpg';
</script>

<!-- <main> -->
<Content>
	<Search size="sm" style="width: 55%;" />

	<Grid
		style="border-radius: 2%; margin-top: 3%; box-shadow: -1px -3px 5px 6px rgba(173,173,173,0.99) inset;
  "
	>
		<Row>
			<Column lg={9}>
				<div class="ProjectInformation">
					<figure>
						<img src={ElipseSinba} alt="Profile icon of the background creator" />
					</figure>
					<ProgressBar
						value={100}
						max={200}
						labelText="Sinba"
						helperText="40 SOL of 200 SOL"
						style="width:100%;"
					/>
				</div>

				<h2>
					A guarantee of 200 SOL can help Sinba in its food and waste recycling business in Peru
				</h2>

				<div class="boxLocation">
					<img src={ImgLocation} alt="Location Icon" />
					<p>Lima, Peru</p>
				</div>

				<div id="boxImgSinba">
					<img src={Sinba} alt="Logo Sinba" />
				</div>
				<div id="textInfo-Sinba">
					<p>
						Sinba's mission is to give a new meaning to waste, to ensure that what was once garbage
						today becomes a vehicle for social and environmental transformation. Sinba is innovating
						waste management in Peru, converting organic waste into pig feed and maximizing the
						value of inorganic recyclables in partnership with formal recyclers. Today we
						collaborate with more than 20 companies and rescue around 840 tons of organic waste per
						year, which generates a positive impact equivalent to planting 36 thousand trees. But
						this is just beginning! They want to multiply their positive impact by 10!
					</p>

					<div class="boxTheFunds">
						<h3>The funds raised will be utilizad to:</h3>

						<div class="list_Box_The_Funds">
							<OrderedList>
								<ListItem>
									Enhance the development of our "Data Tracker" app, improving user experience and
									expanding functionalities.
								</ListItem>
								<ListItem>
									Develop and implement the Purchase Neuron System (PNS) for seamless transactions
									and data sales.
								</ListItem>
								<ListItem>
									Expand our marketing efforts to attract more users and data buyers to the
									platform.
								</ListItem>
								<ListItem>
									Establish partnerships with local merchants, e-wallet providers, and banks to
									integrate our POS system and promote data marketplace adoption.
								</ListItem>
							</OrderedList>
						</div>
					</div>

					<div class="boxThefunds2">
						<p>Link</p>

						<div class="Underlist-Links">
							<UnorderedList>
								<ListItem>Dfinity forum showcase</ListItem>
								<ListItem>Telegram mini-app(Full-on IC)</ListItem>
								<ListItem>Alpha-app</ListItem>
								<ListItem>Website</ListItem>
								<ListItem>X</ListItem>
								<ListItem>Whitepaper</ListItem>
							</UnorderedList>
						</div>
					</div>
				</div>

				<div class="boxProjectTimeline">
					<h3>Project Timeline and Key milestones:</h3>
					<div class="Underlist-ProjectTime">
						<UnorderedList>
							<ListItem>Q2 2024: Launch of the Alpha App.</ListItem>
							<ListItem>Q3 2024: Launch of the App and of Bridge23 DAO.</ListItem>
							<ListItem
								>Future: Full rollout of the Data Marketplace and implementation of the Purchase
								Neuron System.</ListItem
							>
							<ListItem
								>Future: Expansion of partnerships with local merchants and integration of the POS
								system.</ListItem
							>
							<ListItem
								>Future: Introduction of comprehensive buyer interfaces and advanced data analytics
								tools.</ListItem
							>
							<ListItem
								>Future: Launch of the Index Data Set and separate user canisters for enhanced data
								security.</ListItem
							>
							<ListItem
								>Future: Continuous improvements based on community feedback and DAO governance.</ListItem
							>
						</UnorderedList>
					</div>
				</div>
			</Column>

			<!---------------------------------->
			<!-------ICP INVESTMENT FUND-------->
			<!---------------------------------->
			<Column id="ICP_Selection" lg={2}>
				<div class="box-Ivestement">
					<div class="Icp-Investment-Fund">
						<p>Fund this project</p>
						<NumberInput hideSteppers label="Amount this of SOL" value={0} />
						<Button
							icon={Add}
							style="width: 60%; position: relative; left: 20%; top:1%; background-color:#59CF8C; margin-top: 2%;"
							>Fund this project</Button
						>
					</div>
				</div>

				<div class="Box_Project_Creator">
					<div class="InfoProjectCreator">
						<h4>Project Creator</h4>
						<div class="boxImg">
							<img src={ElipseSinba} alt="Icon Perfil" />
						</div>
						<p>Konstain Nezovskii</p>
						<p>
							Hi, I'm Konstantin, an enginnering entrepreneur with a passion ofr divin innovation
							and positive change through blockchain technology. With an M.Sc in Art and adn M.Sc.
							in finance, and over 7 years of global experience, I lead Bridge23, a groundbreaking
							project within the Solana
						</p>
					</div>

					<div class="Box_Link">
						<p>Joint the twitter community</p>
						<a href="https://x.com/FareaNFts">https://x.com/FareaNFts</a>
					</div>

					<div class="Box_Link2">
						<p>Joint the Discord commmunity</p>
						<a href="https://discord.gg/xaJhNbRt">https://discord.gg/xaJhNbRt</a>
					</div>
				</div>
			</Column>
		</Row>

		<!-- Carrosuel of photographs  -->
		<Row class="carousel">
			<div class="body">
				<input type="radio" name="position" checked />
				<input type="radio" name="position" />
				<input type="radio" name="position" />
				<input type="radio" name="position" />
				<input type="radio" name="position" />
				<main id="carousel">
					<div class="item"></div>
					<div class="item"></div>
					<div class="item"></div>
					<div class="item"></div>
					<div class="item"></div>
					<main></main>
				</main>
			</div>
		</Row>
		<Row>
			<div class="Row3">
				<h3>Donors supporting this project</h3>
				<div class="TableInfoWallet">
					<DataTable
						headers={[
							{ key: 'backer', value: 'Backer' },
							{ key: 'donation_date', value: 'Donation Date' },
							{ key: 'sol', value: 'SOL' },
							{ key: 'usdt', value: 'USDT' }
						]}
						rows={[
							{
								id: 'a',
								backer: 'THdf7gMDbSiiRJDM7bassNwuXRr2BHbmpEAj39iFpW3',
								donation_date: '9/25/2024',
								sol: 10,
								usdt: 1200
							},
							{
								id: 'b',
								backer: 'aZfEgMDbFsaEF7bassNwuXRr2BHbmpEAj39ibQs7',
								donation_date: '14/25/2024',
								sol: 15,
								usdt: 1600
							}
						]}
					/>
				</div>
			</div>
		</Row>
	</Grid>
</Content>

<!-- </main> -->

<style>
	.ProjectInformation {
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 3%;
		padding: 1%;
	}

	.ProjectInformation figure {
		margin-right: 1.3%;
	}

	h2 {
		color: #59cf8c;
	}

	.boxLocation {
		margin: 5% auto 5% auto;
		display: flex;
		align-items: center;
	}

	.boxLocation img {
		width: 5%;
	}

	.boxLocation p {
		margin-left: 2%;
	}

	#boxImgSinba {
		/* border: 1px solid black; */
		width: 100%;
		height: 33%;
	}
	#boxImgSinba img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 2%;
	}

	#textInfo-Sinba {
		margin-top: 1rem;
		margin-bottom: 4rem;
		width: 50vw;
		height: 40vh;
		/*border: 1px solid green;*/
	}

	#textInfo-Sinba p {
		padding: 1%;
		text-align: initial;
	}

	/* -------------------------------------------------------------*/
	/*-------Desing "The Funds raised will be utilizad to"----------*/
	/* -------------------------------------------------------------*/

	.list_Box_The_Funds {
		margin: 3% 0%;
		padding: 0% 4.5%;
	}

	.boxThefunds2 {
		padding: 0% 5%;
	}

	/* -------------------------------------------------------------*/
	/*-------Desing "Project Timeline and Key milestones: "---------*/
	/* -------------------------------------------------------------*/

	.boxProjectTimeline {
		/* border:1px solid black; */
		margin-top: 49%;
		padding: 0% 5%;
	}

	/* ------------------------------------------*/
	/*-------"Fund this Project"-------------*/
	/* ----------------------------------------*/

	.box-Ivestement {
		/* border:1px solid red; */
		position: relative;
		left: 20%;
		top: 18%;
		width: 35vw;
		height: 15%;
	}

	.box-Ivestement .Icp-Investment-Fund {
		/* border: 1px solid black; */
		box-shadow: -1px -3px 5px 6px rgba(173, 173, 173, 0.99) inset;
		display: flex;
		flex-direction: column;
		border-radius: 5%;
		padding: 10%;
		width: 35vw;
		height: 100%;
	}

	.Icp-Investment-Fund p {
		margin-bottom: 5%;
	}

	/* --------------------------------------------*/
	/*------- Design "Project Creator"-------------*/
	/* --------------------------------------------*/

	.Box_Project_Creator {
		/* border: 1px solid red; */
		width: 34vw;
		height: 73vh;
		position: relative;
		top: 23%;
		left: 35%;
	}

	.InfoProjectCreator {
		width: 100%;
		/* border: 1px solid blue; */
		margin-bottom: 5%;
	}

	.InfoProjectCreator h4 {
		font-size: 1.8rem;
		margin-bottom: 5%;
	}

	.boxImg {
		margin-bottom: 4%;
	}

	/*--------------------------------------------*/
	/*---------- Row for the carousel ------------*/
	/* -------------------------------------------*/

	:global(.carousel) {
		/* border: 1px solid black; */
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0% 25%;
	}

	.body {
		height: 600px;
		margin: 0;
		display: grid;
		grid-template-rows: 500px 100px;
		grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
		align-items: center;
		justify-items: center;
	}

	main#carousel {
		grid-row: 1 / 2;
		grid-column: 1 / 8;
		width: 100vw;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		transform-style: preserve-3d;
		perspective: 600px;
		--items: 5;
		--middle: 3;
		--position: 1;
		pointer-events: none;
	}

	div.item {
		position: absolute;
		width: 300px;
		height: 450px;
		background-color: coral;
		--r: calc(var(--position) - var(--offset));
		--abs: max(calc(var(--r) * -1), var(--r));
		transition: all 0.25s linear;
		transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-300px * var(--r)));
		z-index: calc((var(--position) - var(--abs)));
	}

	div.item:nth-of-type(1) {
		--offset: 1;
		width: 40%;
		/* background-color: #90f1ef; */
		background-image: url('https://cdnespecial.elcomercio.pe/wp-content/uploads/sites/78/2019/04/1722059.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	div.item:nth-of-type(2) {
		--offset: 2;
		width: 40%;
		background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_sYlRVxntijnXZwjLlY90XlAgeE6p4Vxxg&s');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	div.item:nth-of-type(3) {
		--offset: 3;
		width: 40%;
		/* background-color: #ff9770; */
		background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhW9K8PUhfwOnosorOtY70rmzVn4eGtLlLQ&s');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	div.item:nth-of-type(4) {
		--offset: 4;
		width: 40%;
		/* background-color: #ffd670; */
		background-image: url('https://perunews.com/news/press/wp-content/uploads/2023/10/reciclaje_-480x270.webp');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	div.item:nth-of-type(5) {
		--offset: 5;
		width: 40%;
		background-color: #e9ff70;
	}

	input:nth-of-type(1) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
	input:nth-of-type(1):checked ~ main#carousel {
		--position: 1;
	}

	input:nth-of-type(2) {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
	}
	input:nth-of-type(2):checked ~ main#carousel {
		--position: 2;
	}

	input:nth-of-type(3) {
		grid-column: 4 /5;
		grid-row: 2 / 3;
	}
	input:nth-of-type(3):checked ~ main#carousel {
		--position: 3;
	}

	input:nth-of-type(4) {
		grid-column: 5 / 6;
		grid-row: 2 / 3;
	}
	input:nth-of-type(4):checked ~ main#carousel {
		--position: 4;
	}

	input:nth-of-type(5) {
		grid-column: 6 / 7;
		grid-row: 2 / 3;
	}
	input:nth-of-type(5):checked ~ main#carousel {
		--position: 5;
	}

	/** Row Data Wallet */

	.Row3 {
		width: 100%;
		height: 20rem;
	}
</style>
