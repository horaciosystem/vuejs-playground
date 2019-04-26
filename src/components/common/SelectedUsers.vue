<template>
  <div>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'SelectedItems',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
