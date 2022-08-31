
<template>
  <div>
    <p v-if="$fetchState.pending">Loading...</p>
    <div class="grid-container">
      <div class="grid-search">
        <input
          id="search-input"
          class="input is-medium"
          type="text"
          placeholder="Search"
        />
      </div>
      <div class="grid-wrapper">
        <a v-for="(item, index) in data" :key="index">
          <ItemCard :postId="getPostIdFromUrl(item.url)" :name="item.name" />
        </a>
      </div>
      <button class="load-more button is-primary is-fullwidth">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
const FETCH_LIMIT = 30

// eslint-disable-next-line no-unused-vars
export function getPostIdFromUrl(url) {
  return url.split('/').reverse()[1]
}

export default {
  data() {
    return {
      data: [],
      displayData: [],
      searchValue: [],
      page: 0,
    }
  },
  async fetch() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${FETCH_LIMIT}&offset=${
        this.page * FETCH_LIMIT
      }`
    ).then((res) => res.json())
    this.data = [...this.data, ...response.results]
    console.log('this.data', this.data)
  },
  methods: {
    getPostIdFromUrl(url) {
      return url.split('/').reverse()[1]
    },
  },
}
</script>
