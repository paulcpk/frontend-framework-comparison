<template>
  <div class="row">
    <div class="col-lg-8 offset-md-2">
      <header>
        <h1 class="headline">
          {{ post.title }}
        </h1>
      </header>
      <article class="post post-full" v-html="post.body_html"></article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://dev.to/api/articles/${params.id}`)
    return { post: data }
  },
  head() {
    return {
      title: this.post.title
    }
  }
}
</script>

<style></style>
