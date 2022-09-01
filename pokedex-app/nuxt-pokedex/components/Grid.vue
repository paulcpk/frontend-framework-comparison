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
          @input="updateGrid"
        />
      </div>
      <div class="grid-wrapper">
        <NuxtLink
          v-for="(item, index) in displayData"
          :key="index"
          :to="`/detail/${getPostIdFromUrl(item.url)}`"
        >
          <ItemCard :post-id="getPostIdFromUrl(item.url)" :name="item.name" />
        </NuxtLink>
      </div>
      <button
        class="load-more button is-primary is-fullwidth"
        @click="loadMore"
      >
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
      searchValue: '',
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
  },
  watch: {
    data(curr) {
      this.displayData = curr;
    }
  },
  methods: {
    getPostIdFromUrl(url) {
      return url.split('/').reverse()[1]
    },
    loadMore() {
      this.page++
      this.$fetch()
    },
    updateGrid(e) {
      const value = e.target.value
      const filteredCollection = this.data.filter((item) =>
        item.name.includes(value)
      )
      this.displayData = filteredCollection
    },
  },
}
</script>
