<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import Menu from '@lucide/svelte/icons/menu';

	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Music', href: '#music' },
		{ label: 'Shows', href: '#shows' },
		{ label: 'Booking', href: '#contact' }
	];

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-background/95 shadow-md backdrop-blur-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
		<!-- Logo -->
		<a href="#hero" class="flex items-center">
			<img src="/only-logo.svg" alt="Taylor James" class="h-10 w-auto md:h-12" />
		</a>

		<!-- Desktop links -->
		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile hamburger -->
		<div class="md:hidden">
			<Sheet.Root bind:open={mobileOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button variant="ghost" size="icon" {...props}>
							<Menu class="size-5" />
							<span class="sr-only">Open menu</span>
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="right" class="w-72 bg-background">
					<Sheet.Header>
						<Sheet.Title>
							<img src="/only-logo.svg" alt="Taylor James" class="h-10" />
						</Sheet.Title>
					</Sheet.Header>
					<nav class="mt-8 flex flex-col gap-2 px-2">
						{#each navLinks as link (link.href)}
							<a
								href={link.href}
								onclick={closeMobile}
								class="rounded-md px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
							>
								{link.label}
							</a>
						{/each}
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</nav>
