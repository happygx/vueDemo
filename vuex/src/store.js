import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [{
        name: 'aaa',
        price: 200
      },
      {
        name: 'bbb',
        price: 222
      },
      {
        name: 'ccc',
        price: 322
      },
    ]
  },
  getters: {
    newProducts(state) {
      return state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price * 2
        }
      });
    }
  },
  mutations: {
    reducePrice(state, payload) {
      state.products.forEach(product => {
        product.price -= payload;
      })
    }
  },
  actions: {
    reducePrice(context, payload) {
      setTimeout(function () {
        context.commit('reducePrice', payload);
      }, 2000);
    }
  }
})
