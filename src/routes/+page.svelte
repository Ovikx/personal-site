<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	const items = ['apps', 'websites', 'developer tools', 'games', 'digital art'];
	const gradients = [
		['#EF4444', '#EAB308'],
		['#EAB308', '#10B981'],
		['#10B981', '#0EA5E9'],
		['#0EA5E9', '#8B5CF6'],
		['#8B5CF6', '#EC4899']
	];

	let idx = 0;
	let isVisible = true;

	onMount(() => {
		const interval = setInterval(() => {
			isVisible = false;

			setTimeout(() => {
				idx = (idx + 1) % items.length;
				isVisible = true;
			}, 200);
		}, 2000);
		return () => clearInterval(interval);
	});
</script>

<div class="flex bg-[url('spectrum-gradient.svg')] bg-cover min-h-screen">
	<div class="flex flex-col items-center mt-20 sm:mt-36">
		<h1 class="font-semibold text-5xl sm:text-8xl">Hey, I'm Ovik</h1>

		<div class="flex flex-row mt-10 text-2xl text-gray-200 sm:text-5xl">
			<p>I make</p>
			<p>&nbsp;</p>
			{#if isVisible}
				<p
					transition:fade={{ duration: 500 }}
					class={`font-black pb-2 text-transparent bg-clip-text`}
					style="background-image: linear-gradient(to right, {gradients[idx][0]}, {gradients[
						idx
					][1]});"
				>
					{items[idx]}
				</p>
			{/if}
		</div>
		<p class="text-md sm:text-3xl mt-10 sm:mt-16 w-4/5 sm:w-3/5 text-center text-gray-300">
			I'm a student who's excited about creating useful (and sometimes goofy) software and
			streamlining the developer experience via open source.
		</p>
	</div>
</div>
<div>
	<p>Hello world</p>
</div>
