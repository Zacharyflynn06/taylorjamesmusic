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
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { toast } from 'svelte-sonner';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		if (params.get('submitted') === '1') {
			toast.success('Thanks! Your message is on its way.', {
				description: "We'll be in touch soon."
			});
			// Clear the query param so a refresh doesn't re-trigger the toast.
			params.delete('submitted');
			const qs = params.toString();
			const url = window.location.pathname + (qs ? `?${qs}` : '') + window.location.hash;
			history.replaceState(null, '', url);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>
<Toaster richColors position="bottom-right" />
<Footer />
