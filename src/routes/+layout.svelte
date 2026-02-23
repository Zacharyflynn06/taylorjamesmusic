<script lang="ts">
	import './layout.css';
	import '@fontsource/cormorant-garamond/300.css';
	import '@fontsource/cormorant-garamond/400.css';
	import '@fontsource/cormorant-garamond/500.css';
	import '@fontsource/cormorant-garamond/600.css';
	import '@fontsource/cormorant-garamond/700.css';
	import '@fontsource-variable/rubik';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>
<Footer />
