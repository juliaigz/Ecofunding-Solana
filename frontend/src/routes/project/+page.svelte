<script>
	import { Search } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import { NumberInput } from 'carbon-components-svelte';
	import { Content } from 'carbon-components-svelte';
	import { ProgressBar } from 'carbon-components-svelte';
	import { OrderedList, ListItem, Link, UnorderedList } from 'carbon-components-svelte';
	import { DataTable } from 'carbon-components-svelte';

	//import perfilIcon from
	import Sinba from '$lib/images/Sinba.jpg';
	import ImgLocation from '$lib/images/bxs_map.png';
	import ElipseSinba from '$lib/images/ElipseSinba.png';

	import StartTransaction from '$lib/StartTransaction.svelte';
	let value = 0;
	let projectWallet = 'BpvQSKHu7Djos4yufZwtRHa8nufFgksnkG9WnkAf8rHZ';

	import Carousel from 'svelte-carousel';
	const images = [
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650391490/photo-1644241687200-eadaf7601290_xcz2kh.jpg',
			description: 'image1'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650391337/photo-1647067867267-e01d98462f3c_ugtnwe.jpg',
			description: 'image2'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650391131/photo-1648800475313-2bb7fbec8701_ae60yw.jpg',
			description: 'image3'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650390102/photo-1649894222226-056a1a79d9fb_xlv73h.jpg',
			description: 'image4'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650389425/photo-1649894221695-45abb718a190_sgjhwd.jpg',
			description: 'image5'
		}
	];
	let carousel; // for calling methods of the carousel instance
	const handleNextClick = () => {
		carousel.goToNext();
	};

	let widthWindow;


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
						<NumberInput hideSteppers label="Amount this of SOL" bind:value />
						<StartTransaction amount={value} recipient={projectWallet} />
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
						<p>Join the twitter community</p>
						<a href="https://x.com/FareaNFts">https://x.com/FareaNFts</a>
					</div>

					<div class="Box_Link2">
						<p>Join the Discord commmunity</p>
						<a href="https://discord.gg/xaJhNbRt">https://discord.gg/xaJhNbRt</a>
					</div>
				</div>
			</Column>
		</Row>

		<!-- Carrosuel of photographs  -->
		<Row style="padding:5%">
			  <Carousel
				bind:this={carousel}
				let:loaded
				autoplay
				autoplayDuration={3000}
				autoplayProgressVisible>
				{#each images as src, imageIndex (src)}
				  <div class="img-container" style="width: 100vw; height=100vh;">
					{#if loaded.includes(imageIndex)}
					  <img src={src.url} alt={src.description} width={1000} height={900}/>
					{/if}
				  </div>
				{/each}
			  </Carousel>
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


	.boxSecondCarousel{
		border: 1px solid black;
		padding: auto;
		width: 100%;
	}









	/** Row Data Wallet */

	.Row3 {
		width: 100%;
		height: 20rem;
	}
</style>
