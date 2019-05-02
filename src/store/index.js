import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import usersDry from './modules/usersDry'
import user from './modules/user'

Vue.use(Vuex)

console.log(user)

export default new Vuex.Store({
  modules: {
    users,
    usersDry,
    user
  },
  strict: true
})
