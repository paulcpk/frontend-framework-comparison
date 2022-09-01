<template>
  <div>
    <NuxtLink to="/" class="button is-ghost mb-4">
      &lsaquo;&nbsp;Back
    </NuxtLink>
    <ItemCard
      :post-id="data.id"
      :name="data.name"
      :height="data.height"
      :weight="data.weight"
      :types="data.types"
    />
  </div>
</template>


<script>
export default {
  async asyncData({ params }) {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    ).then((res) => res.json())
    console.log('data', data)
    return {
      data,
    }
  },
}
</script>
