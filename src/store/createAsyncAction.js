export default function createAsyncAction({
  key,
  methodName,
  handler,
  initialState = null,
  stateUpdater = ({ currentData }) => currentData
}) {
  let [setLoading, setError, setData] = [
    `${key}SetLoading`,
    `${key}SetError`,
    `${key}SetData`
  ]

  return {
    state: {
      [key]: {
        loading: false,
        error: null,
        data: initialState
      }
    },
    mutations: {
      [setData]: function(state, data) {
        state[key].data = data
      },
      [setLoading]: function(state, loading) {
        state[key].loading = loading
      },
      [setError]: function(state, error) {
        state[key].error = error
      }
    },
    actions: {
      [methodName]: function({ commit, state }, params) {
        commit(setLoading, true)
        return handler(params)
          .then(data => {
            let newData = stateUpdater({
              prevState: state[key].data,
              currentData: data
            })
            commit(setData, newData)
          })
          .catch(error => commit(setError, error))
          .finally(() => commit(setLoading, false))
      }
    }
  }
}
