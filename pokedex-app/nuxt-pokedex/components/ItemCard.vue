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
    <template v-if="height && weight && types">
      <DetailTable :height="height" :weight="weight" :types="types" />
    </template>
  </div>
</template>

<script>
import DetailTable from './DetailTable.vue'
export default {
  props: ['postId', 'name', 'height', 'weight', 'types'],
  components: { DetailTable },
}
</script>
