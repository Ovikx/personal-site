<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	const items = ['apps', 'websites', 'developer tools', 'games', '3D digital art'];
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

<div class="flex bg-header-gradient bg-cover min-h-screen">
	<div class="flex flex-col items-center mt-28 md:mt-28">
		<h1 class="font-extrabold text-5xl md:text-9xl">OVIK DAS</h1>

		<div class="flex flex-row mt-10 text-2xl text-gray-200 md:text-5xl">
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
		<p class="text-md md:text-2xl mt-10 md:mt-16 w-4/5 md:w-3/5 text-center text-gray-300">
			I'm a student who's excited about creating useful (and sometimes goofy) software and
			streamlining the developer experience via open source.
		</p>

		<a
			class="flex flex-row items-center mt-10 md:mt-16 py-2 px-4 | bg-transparent border-2 border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-gray-200 font-bold rounded"
			href="https://www.github.com/Ovikx"
			target="_blank"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				role="img"
				class="inline-block align-text-bottom overflow-visible fill-gray-300"
				viewBox="0 0 16 16"
				width="32"
				height="32"
				><path
					d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
				/></svg
			>
			<p class="ml-3">My GitHub</p>
		</a>
		<svg
			class="animate-bounce fill-gray-400 mt-10"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			width="48"
			><path
				d="M480-200 240-440l42-42 198 198 198-198 42 42-240 240Zm0-253L240-693l42-42 198 198 198-198 42 42-240 240Z"
			/></svg
		>
	</div>
</div>
<div>
	<h1 class="flex justify-center mt-10 | text-3xl md:text-5xl">PROJECTS</h1>
</div>
