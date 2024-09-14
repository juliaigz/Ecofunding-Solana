<script>
    import { Grid, Row, Column } from "carbon-components-svelte";
    import imgFooterBurbujas from "$lib/images/imgFooterBurbujas.png";
    import { Button } from "carbon-components-svelte";
    import Add from "carbon-icons-svelte/lib/Add.svelte";
</script>

<hr />

<Grid>
    <Row>
        <Column id="columna1" style="display: flex; gap: 5%; margin-top: 5%;">
            <figure>
                <img src={imgFooterBurbujas} alt="Logo de la Compañia" />
            </figure>

            <p>Ecofound <strong>ICP</strong></p>
        </Column>
        <Column style="margin-top: 5%;">
            <ul>
                <li>ABOUT</li>
                <li>HELP</li>
                <li>START A PROJECT</li>
                <li>CONTACT US</li>
            </ul>
        </Column>
        <Column style="margin-top: 5%;">
            <Button
                icon={Add}
                style="background-color:#59CF8C; width: 12.625rem;"
                >find a project</Button
            >
        </Column>
    </Row>
</Grid>

<style>
    hr {
        margin-top: 12%;
        width: 100%;
    }

    ul li {
        padding: 5%;
    }
</style>
