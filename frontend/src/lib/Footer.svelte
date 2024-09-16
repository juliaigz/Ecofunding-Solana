<script>
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import imgFooterBurbujas from '$lib/images/imgFooterBurbujas.png';
	import { Button, UnorderedList, ListItem, Link } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
</script>

<hr />

<Grid>
	<Row>
		<Column style="display: flex; gap: 5%; margin-top: 5%;">
			<figure>
				<img src={imgFooterBurbujas} alt="Logo de la Compañia" />
			</figure>
			<p>Ecofunding <strong>SOL</strong></p>
		</Column>
		<Column style="margin-top: 5%;">
			<UnorderedList expressive style="padding: 5%;">
				<ListItem style="padding: 3%;">
					<Link size="lg" href="/" style="color:black; ">About</Link></ListItem
				>
				<ListItem style="padding: 3%;">
					<Link size="lg" href="/help" style="color:black; ">Help</Link></ListItem
				>
				<ListItem style="padding: 3%;"
					><Link size="lg" href="/project" style="color:black; ">START A PROJECT</Link></ListItem
				>
				<ListItem style="padding: 3%;"
					><Link size="lg" href="/contact" style="color:black; ">CONTACT US</Link></ListItem
				>
			</UnorderedList>
		</Column>
		<Column style="margin-top: 5%;">
			<Button icon={Add} style="background-color:#59CF8C; width: 12.625rem;">find a project</Button>
		</Column>
	</Row>
</Grid>

<style>
	hr {
		margin-top: 12%;
		width: 100%;
	}
</style>
