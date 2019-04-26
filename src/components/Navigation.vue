<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-start horizontal">
      <component
        :is="item.component"
        v-for="item in items"
        :key="item.to"
        class="navbar-item"
        :item="item"
      />
    </div>
  </nav>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>
