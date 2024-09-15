<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SideNav,
		SideNavItems,
		SideNavLink,
		SideNavDivider,
		SkipToContent
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>

<Header expansionBreakpoint={1700} company="Ecofunding" platformName="SOL" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/about" text="About" />
		<HeaderNavItem href="/help" text="Help" />
		<HeaderNavItem href="/project" text="Start a project" />
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink text="About" />
		<SideNavLink text="Help" />
		<SideNavLink text="Start a project" />
		<SideNavDivider />
	</SideNavItems>
</SideNav>

<style>
</style>
