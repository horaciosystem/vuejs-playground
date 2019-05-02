import createAsyncAction from '@/store/createAsyncAction'

const user = createAsyncAction({
  key: 'user',
  methodName: 'fetchUser',
  handler: ({ url }) => fetch(url).then(response => response.json())
})

const userRepos = createAsyncAction({
  key: 'userRepos',
  methodName: 'fetchUserRepos',
  initialState: [],
  handler: ({ url }) => fetch(url).then(response => response.json())
})

export default {
  namespaced: true,
  state: {
    ...user.state,
    ...userRepos.state
  },
  mutations: {
    ...user.mutations,
    ...userRepos.mutations
  },
  actions: {
    ...user.actions,
    ...userRepos.actions
  }
}
