<script>
	import ItemCardTable from './ItemCardTable.svelte';
	export let postId;
	export let name = undefined;;
	export let height = undefined;
	export let weight = undefined;
	export let types = undefined;
</script>

<div class="tile">
	<figure class="image">
		<img
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${postId}.png`}
			alt={name}
		/>
	</figure>
	<div class="content">
		<h3>
			<span class="prefix">#{postId}:&nbsp;</span>
			{name}
		</h3>
		{#if height || weight || types}
			<ItemCardTable {height} {weight} {types} />
		{/if}
	</div>
</div>
