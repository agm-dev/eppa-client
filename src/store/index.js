import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    wishlist: []
  },
  mutations: {
    setProducts (state, products) {
      state.products = [...products]
    },
    addProducts (state, products) {
      state.products = [...state.products, ...products]
    },
    setWishlist (state) {
      console.log(`loading wishlist products`)
      const wishlistString = localStorage.getItem('wishlist') || '[]'
      const products = JSON.parse(wishlistString)
      state.wishlist = products
    },
    addToWishlist (state, product) {
      if (state.wishlist.find(item => item.slug === product.slug)) {
        console.log(`product with slug ${product.slug} is already in the wishlist`)
      } else {
        state.wishlist.push(product)
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        console.log(`product with slug ${product.slug} has been added and saved to the wishlist`)
      }
    },
    removeFromWishlist (state, product) {
      state.wishlist = state.wishlist.filter(item => item.slug !== product.slug)
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      console.log(`product ${product.slug} has been removed from wishlist`)
    }
  }
})
