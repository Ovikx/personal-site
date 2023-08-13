<script lang="ts">
	export let href: string;
	export let text: string;
</script>

<a
	class="flex flex-row items-center py-2 px-4 | bg-transparent border-2 border-gray-800 hover:border-gray-700 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-800 hover:scale-105 text-gray-200 font-bold rounded transition-all delay-100"
	{href}
	target="_blank"
>
	<slot name="svg" />
	<p class="ml-3">{text}</p>
</a>
