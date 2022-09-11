<template>
  <table className="mb-4 mt-4">
    <tbody>
      <tr>
        <th>Height:</th>
        <td>{{ weight }}</td>
      </tr>
      <tr>
        <th>Weight:</th>
        <td>{{ weight }}</td>
      </tr>
      <tr>
        <th>Types:</th>
        <td>{{ types.map((type) => type.type.name).join(', ') }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    height: Number,
    weight: Number,
    types: Array,
  },
}
</script>
