<script>
	import { onMount } from 'svelte';

	import ItemCard from '@/components/ItemCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { id } = data;
	let res = {};

	onMount(async function () {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		res = await response.json();
	});
</script>

<a href="/" class="button is-ghost mb-4">&lsaquo;&nbsp;Back</a>
<ItemCard postId={id} {...res} />
