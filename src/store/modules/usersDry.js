import createASynAction from '@/store/createAsyncAction'

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

let asyncAction = createASynAction({
  key: 'usersDry',
  methodName: 'fetchUsers',
  initialState: [],
  handler: ({ url }) => fetch(url).then(response => response.json()),
  stateUpdater
})

export default {
  namespaced: true,
  ...asyncAction
}
