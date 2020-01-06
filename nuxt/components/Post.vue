<template>
  <article class="post post-list-item">
    <h3 class="post-title">{{ title }}</h3>
    <a :href="`/post/${postId}`" class="btn btn-secondary">Read more</a>
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
  ],
  name: 'post'
}
</script>

<style></style>
