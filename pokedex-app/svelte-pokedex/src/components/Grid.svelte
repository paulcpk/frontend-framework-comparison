<script>
	import { onMount } from 'svelte';
	import ItemCard from './ItemCard.svelte';

	export function getPostIdFromUrl(url) {
		return url.split('/').reverse()[1];
	}

	const FETCH_LIMIT = 30;
	let data = [];
	let displayData = [];
	let searchValue = '';
	let page = 0;

	async function fetchData() {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${FETCH_LIMIT}&offset=${page * FETCH_LIMIT}`
		);
		const res = await response.json();
		data = [...data, ...res.results];
	}

	onMount(async function () {
		fetchData();
	});

	$: if (page) {
		fetchData();
	}

	$: if (searchValue || data) {
		const filteredCollection = data.filter((item) => item.name.includes(searchValue));
		displayData = filteredCollection;
	}
</script>

<div class="grid-container">
	<div class="grid-search">
		<input
			bind:value={searchValue}
			id="search-input"
			class="input is-medium"
			type="text"
			placeholder="Search"
		/>
	</div>
	<div class="grid-wrapper">
		{#each displayData as item}
			{@const postId = getPostIdFromUrl(item.url)}
			<a href={`detail/${getPostIdFromUrl(item.url)}`}>
				<ItemCard name={item.name} postId={getPostIdFromUrl(item.url)} />
			</a>
		{/each}
	</div>
	<button class="load-more button is-primary is-fullwidth" on:click={() => page++}>
		Load More
	</button>
</div>
