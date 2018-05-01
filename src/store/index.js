import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, products) {
      state.products = [...products]
    },
    addProducts (state, products) {
      state.products = [...state.products, ...products]
    }
  }
})
