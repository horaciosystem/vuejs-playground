function useFetch({ url }) {
  return {
    data: () => ({
      error: null,
      loading: false,
      data: null
    }),
    created() {
      this.$watch(() => url, this.fetchModel, {
        immediate: true
      })
    },
    methods: {
      fetchModel() {
        this.loading = true
        console.log(url)
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.data = data
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
}

export default useFetch
