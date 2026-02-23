<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
</script>

<section id="about" class="py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">
			<!-- Photo -->
			<div class="order-2 md:order-1">
				<div class="relative overflow-hidden rounded-2xl">
					<img
						src="/Half Body.webp"
						alt="Taylor James"
						class="h-auto w-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Bio text -->
			<div class="order-1 md:order-2">
				<h2 class="text-foreground mb-2 text-sm font-medium tracking-widest uppercase">
					About
				</h2>
				<Separator class="bg-primary mb-6 w-12" />
				<h3 class="text-foreground mb-6 text-3xl leading-tight md:text-4xl">
					The Artist
				</h3>
				<p class="text-foreground/80 mb-6 text-base leading-relaxed md:text-lg">
					Taylor James is a guitarist, singer-songwriter, and bandleader recognized for his
					soulful style, expressive guitar work, and genre-blending sound rooted in folk,
					acoustic, and modern influences. With more than 20 years of experience performing
					across the country &amp; internationally, he creates music that is both refined and
					adventurous.
				</p>
				<p class="text-foreground/80 text-base leading-relaxed md:text-lg">
					In addition to his original artistry, Taylor is available for select concerts,
					festivals, weddings, corporate events, and private performances, delivering
					memorable live music experiences for audiences and clients alike.
				</p>
			</div>
		</div>
	</div>
</section>
