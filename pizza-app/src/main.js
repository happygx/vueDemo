import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition){
    //return { x:0,y:100 }
    //return { selector: '.btn-success' }

    if(savedPosition){
      return savedPosition
    } else{
      return { x:0, y:0 }
    }
  }
})

// 路由全局前置守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.path == '/login' || to.path == '/register') {
//     next()
//   }else {
//     alert('请登录！')
//     router.push('/login')
//   }
// })
// 全局后置守卫
// router.afterEach( (to,from) => {
//   alert('afterEach')
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
