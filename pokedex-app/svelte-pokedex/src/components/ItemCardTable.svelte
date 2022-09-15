<script>
	export let height = undefined;
	export let weight = undefined;
	export let types = undefined;
</script>
{#if height || weight || types}
	<table class="mb-4 mt-4">
		<tbody>
			<tr>
				<th>Height:</th>
				<td>{height}</td>
			</tr>
			<tr>
				<th>Weight:</th>
				<td>{weight}</td>
			</tr>
			<tr>
				<th>Types:</th>
				<td>{types.map((type) => type.type.name).join(', ')}</td>
			</tr>
		</tbody>
	</table>
{/if}
