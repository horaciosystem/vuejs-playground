export default function createAsyncAction({
  methodName,
  handler,
  stateUpdater = ({ currentData }) => currentData
}) {
  return {
    state: {
      loading: false,
      error: null,
      data: []
    },
    mutations: {
      setData(state, data) {
        state.data = data
      },
      setLoading(state, loading) {
        state.loading = loading
      },
      setError(state, error) {
        state.error = error
      }
    },
    actions: {
      [methodName]: function({ commit, state }, params) {
        commit('setLoading', true)
        handler(params)
          .then(response => response.json())
          .then(data => {
            let newData = stateUpdater({
              prevState: state.data,
              currentData: data
            })
            commit('setData', newData)
          })
          .catch(error => commit('setError', error))
          .finally(() => commit('setLoading', false))
      }
    }
  }
}
