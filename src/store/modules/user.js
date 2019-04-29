import createAsyncAction from '@/store/createAsyncAction'

const asyncAction = createAsyncAction({
  methodName: 'fetchUser',
  handler: ({ url }) => fetch(url)
})

export default {
  namespaced: true,
  ...asyncAction
}
