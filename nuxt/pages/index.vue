<template>
  <div class="row">
    <div class="col-lg-8 offset-md-2">
      <header>
        <h1 class="headline">
          Nuxt example Blog
        </h1>
      </header>
      <main class="post-container">
        <article
          class="post post-list-item"
          v-for="post in posts"
          v-bind:key="post.id"
        >
          <h3 class="post-title">{{ post.title }}</h3>
          <nuxt-link
            :to="{ name: 'post-id', params: { id: post.id } }"
            class="btn btn-secondary"
            >Read more</nuxt-link
          >
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://dev.to/api/articles`)
    return { posts: data }
  },
  head() {
    return {
      title: 'Nuxt example Blog'
    }
  }
}
</script>

<style></style>
