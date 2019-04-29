import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './pages/routes'
import store from './store'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
