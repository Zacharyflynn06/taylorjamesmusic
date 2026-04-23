<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import aboutImg from '$lib/assets/images/half-body.webp?enhanced';
</script>

<section id="about" class="py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">
			<!-- Photo -->
			<div class="order-2 md:order-1">
				<div class="relative overflow-hidden rounded-2xl">
					<enhanced:img
						src={aboutImg}
						alt="Taylor James"
						sizes="(min-width: 768px) 600px, 100vw"
						class="h-auto w-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Bio text -->
			<div class="order-1 md:order-2">
				<h2 class="mb-2 text-sm font-medium tracking-widest text-foreground uppercase">About</h2>
				<Separator class="mb-6 w-12 bg-primary" />
				<h3 class="mb-6 text-3xl leading-tight text-foreground md:text-4xl">The Artist</h3>
				<p class="mb-6 text-base leading-relaxed text-foreground/80 md:text-lg">
					Taylor James is a guitarist, singer-songwriter, and musical curator whose performances
					live at the intersection of acoustic tradition and modern musical exploration. With over
					two decades devoted to his craft, Taylor has developed a distinctive voice on the
					guitar&mdash;expressive, dynamic, and deeply rooted in the language of American folk,
					roots, and improvisational music.
				</p>
				<p class="text-base leading-relaxed text-foreground/80 md:text-lg">
					In addition to his original artistry, Taylor is available for private performances,
					festivals, corporate events, and weddings, delivering memorable live music experiences for
					audiences and clients alike.
				</p>
			</div>
		</div>
	</div>
</section>
