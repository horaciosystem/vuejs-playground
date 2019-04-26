<template>
  <div>
    <span v-if="error">Oh no :(</span>
    <span v-else-if="loading && !data">Loading...</span>
    <slot v-else :data="data" />
  </div>
</template>

<script>
export default {
  name: 'Fetcher',
  props: {
    url: {
      type: String
    },
    stateUpdater: {
      type: Function,
      default: ({ currentState }) => currentState
    }
  },
  data: () => ({
    error: null,
    loading: false,
    data: null
  }),
  watch: {
    url: {
      handler: 'fetchModel',
      immediate: true
    }
  },
  methods: {
    fetchModel() {
      this.loading = true
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.data = this.stateUpdater({
            previousState: this.data,
            currentState: data
          })
          this.error = null
        })
        .catch(error => {
          console.error(error)
          this.error = error
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>
