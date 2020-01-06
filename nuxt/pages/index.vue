<template>
  <div class="row">
    <div class="col-lg-8 offset-md-2">
      <header>
        <h1 class="headline">
          Nuxt example Blog
        </h1>
      </header>
      <div class="post-container">
        <Post
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:postId="post.id"
          v-bind:title="post.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Post from '~/components/Post.vue'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://dev.to/api/articles`)
    return { posts: data }
  },
  head() {
    return {
      title: 'Nuxt example Blog'
    }
  },
  components: {
    Post
  }
}
</script>

<style></style>
