// initial state
const state = {
  loading: false,
  error: null,
  data: []
}

// getters
const getters = {}

function stateUpdater({ prevState, currentData }) {
  //update items already exist
  let updatedItems = prevState.map(prevItem => {
    let newItem = currentData.find(newItem => newItem.id === prevItem.id)
    return newItem || prevItem
  })
  //get only new items
  let newItems = currentData.filter(newItem => {
    return !updatedItems.some(oldItem => oldItem.id === newItem.id)
  })
  return updatedItems.concat(newItems)
}

// actions
const actions = {
  // Fetch users
  fetchUsers({ commit, state }, { url }) {
    commit('setLoading', true)
    fetch(url)
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

// mutations
const mutations = {
  setData(state, data) {
    state.data = data
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
