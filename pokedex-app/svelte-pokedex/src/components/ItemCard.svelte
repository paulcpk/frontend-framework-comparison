<script>
  import ItemCardTable from './ItemCardTable.svelte';
	export let postId;
	export let name = '';
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
        <ItemCardTable {...$$restProps} />
	</div>
</div>
