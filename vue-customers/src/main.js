import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import Detail from './components/Detail'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$axios = axios

const router = new VueRouter({
  routes: [
    {path:'/',component: Customers},
    {path:'/about',component: About},
    {path:'/add/:id',component: Add},
    {path:'/detail/:id',component: Detail},
  ],
  mode: "history",
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
