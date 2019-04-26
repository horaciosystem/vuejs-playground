import Home from './Home'
import UserDetailsPage from './UserDetailsPage'

export default [
  { path: '/', component: Home },
  { path: '/users/:login', component: UserDetailsPage }
]
