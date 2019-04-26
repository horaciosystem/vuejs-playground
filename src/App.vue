<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.Wrapper {
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  object-fit: cover;
}
</style>
