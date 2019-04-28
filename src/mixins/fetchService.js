function fetchService({
  key,
  initialState = null,
  fetcher: {
    methodName,
    handler,
    stateUpdater = ({ currentData }) => currentData
  }
}) {
  return {
    data: () => ({
      [key]: {
        error: null,
        loading: false,
        data: initialState
      }
    }),
    methods: {
      [methodName]: function(props) {
        this[key].loading = true
        handler(props)
          .then(response => response.json())
          .then(data => {
            this[key].data = stateUpdater({
              prevState: this[key].data,
              currentData: data
            })
            this[key].error = null
          })
          .catch(error => {
            console.error(error)
            this[key].error = error
          })
          .finally(() => (this[key].loading = false))
      }
    }
  }
}

export default fetchService
