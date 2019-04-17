import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import axios from "axios"
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.prototype.$axios = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

//自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8);

//   }
// })
Vue.directive('theme', {
  bind(el, binding, vnode) {
    // console.log(el);
    // console.log(binding);
    // console.log(vnode);
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '600px';
    }

    if (binding.arg == 'bg') {
      el.style.background = '#d7f7f5';
    }
  }
})

//自定义过滤器
// Vue.filter('to-uppercase', function (val) {
//   return val.toUpperCase();
// })
Vue.filter('intercept', function (val) {
  if (val.length > 100) {
    return val.slice(0, 100) + '...';
  } else {
    return val;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
