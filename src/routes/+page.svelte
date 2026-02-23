<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Music from '$lib/components/Music.svelte';
	import Shows from '$lib/components/Shows.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<!-- Primary -->
	<title>Taylor James | Guitarist, Singer-Songwriter & Bandleader</title>
	<meta
		name="description"
		content="Taylor James is a guitarist, singer-songwriter, and bandleader recognized for his soulful style, expressive guitar work, and genre-blending sound. Available for concerts, festivals, weddings, and private events."
	/>
	<meta
		name="keywords"
		content="Taylor James, guitarist, singer-songwriter, bandleader, live music, wedding musician, corporate entertainment, folk, acoustic"
	/>
	<meta name="author" content="Taylor James" />
	<link rel="canonical" href="https://taylorjamesmusic.com" />

	<!-- Open Graph -->
	<meta property="og:title" content="Taylor James | Guitarist, Singer-Songwriter & Bandleader" />
	<meta
		property="og:description"
		content="Soulful guitar. Genre-blending sound. 20+ years live. Available for booking."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://taylorjamesmusic.com" />
	<meta property="og:image" content="https://taylorjamesmusic.com/Half Body.webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="1600" />
	<meta property="og:image:alt" content="Taylor James — guitarist and singer-songwriter" />
	<meta property="og:site_name" content="Taylor James Music" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Taylor James | Guitarist, Singer-Songwriter & Bandleader" />
	<meta
		name="twitter:description"
		content="Soulful guitar. Genre-blending sound. 20+ years live. Available for booking."
	/>
	<meta name="twitter:image" content="https://taylorjamesmusic.com/Half Body.webp" />
	<meta name="twitter:image:alt" content="Taylor James — guitarist and singer-songwriter" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'MusicGroup',
		name: 'Taylor James',
		url: 'https://taylorjamesmusic.com',
		image: 'https://taylorjamesmusic.com/Half Body.webp',
		description:
			'Taylor James is a guitarist, singer-songwriter, and bandleader recognized for his soulful style, expressive guitar work, and genre-blending sound rooted in folk, acoustic, and modern influences.',
		genre: ['Folk', 'Acoustic', 'Singer-Songwriter'],
		member: {
			'@type': 'Person',
			name: 'Taylor James',
			jobTitle: 'Guitarist, Singer-Songwriter & Bandleader',
			knowsAbout: ['Guitar', 'Songwriting', 'Live Performance']
		},
		event: {
			'@type': 'Event',
			name: 'Book Taylor James',
			description:
				'Available for select concerts, festivals, weddings, corporate events, and private performances.',
			performer: { '@type': 'Person', name: 'Taylor James' }
		}
	})}</script>`}
</svelte:head>

<Hero />
<div class="mx-auto max-w-[1200px]">
	<About />
	<Music />
	<Shows />
	<Contact />
</div>
