<template>
  <article class="post post-list-item">
    <h3 class="post-title">{{ title }}</h3>
    <nuxt-link
      :to="{ name: 'post-id', params: { id: postId } }"
      class="btn btn-secondary"
      >Read more</nuxt-link
    >
  </article>
</template>

<script>
export default {
  props: [
    'postId',
    'title',
    'commentsCount',
    'publishedAt',
    'readablePublishedAt'
  ]
}
</script>

<style></style>
