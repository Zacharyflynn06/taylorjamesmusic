<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Music from '$lib/components/Music.svelte';
	import Shows from '$lib/components/Shows.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Taylor James | Guitarist, Singer-Songwriter & Bandleader</title>
	<meta
		name="description"
		content="Taylor James is a guitarist, singer-songwriter, and bandleader recognized for his soulful style, expressive guitar work, and genre-blending sound. Available for concerts, festivals, weddings, and private events."
	/>
	<meta property="og:title" content="Taylor James | Guitarist, Singer-Songwriter & Bandleader" />
	<meta
		property="og:description"
		content="Soulful guitar. Genre-blending sound. 20+ years live. Available for booking."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/Half Body.webp" />
</svelte:head>

<Hero />
<About />
<Music />
<Shows />
<Contact />
