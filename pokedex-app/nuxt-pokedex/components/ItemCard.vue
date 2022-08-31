<template>
  <div class="tile">
    <figure class="image">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${postId}.png`"
        :alt="name"
      />
    </figure>
    <div class="content">
      <h3>
        <span class="prefix">#{{ postId }}:&nbsp;</span>
        {{ name }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'postId'],
}
</script>
