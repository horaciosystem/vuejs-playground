import { render } from 'vue-testing-library'
import 'jest-dom/extend-expect'
import UserListVuex from './UserListVuex'

// const store = {
//   state: {
//     count: 0
//   },
//   actions: {
//     increment: ({ commit, state }) => commit('SET_COUNT', state.count + 1),
//     decrement: ({ commit, state }) => commit('SET_COUNT', state.count - 1)
//   },
//   mutations: {
//     SET_COUNT: (state, count) => {
//       state.count = count
//     }
//   }
// }

describe('UserListVuex', () => {
  it('renders the page header', () => {
    const { getByText } = render(UserListVuex)
    expect(getByText('test1')).toHaveTextContent('Hello World')
  })
})
