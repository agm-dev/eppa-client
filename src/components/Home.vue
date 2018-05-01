<template>
  <div class="page">
    <div class="search-box">
      <input type="text" v-model="searchText" @keypress.enter="searchByText">
      <button type="submit" @click="searchByText">Search</button>
    </div>
    <div class="product-list product-list__container">
      <ul class="product-list__list">
        <li class="product-list__item" v-for="(product, index) in products" :key="index">
          <div class="product">
            <router-link v-bind:to="{ name: 'Product', params: { id: product.id, slug: product.slug } }">
              <div class="product__image">
                <img v-bind:src="product.image" alt="product-image">
              </div>
              <div class="product__details">
                <p>{{ product.name }}</p>
                <p>{{ product.prices[0].price }} (min: {{ product.min_price }}, max: {{ product.max_price }})</p>
              </div>
            </router-link>
            <div class="product__actions">
                <button @click="addToWishlist(product)">Add Wishlist</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EppaService from '@/services/EppaService'

export default {
  name: 'Home',
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    if (!this.$store.state.products.length) {
      this.getProducts()
    }
    if (!this.$store.state.wishlist.length) {
      this.loadWishlist()
    }
  },
  methods: {
    async searchByText (e) {
      if (!this.searchText.length) return
      console.log(`searching by text: ${this.searchText}`)
      const response = await EppaService.searchProducts(this.searchText)
      let apiProducts = response.data.results
      console.log(`search by text '${this.searchText}' has found ${apiProducts.length} products`)
      this.$store.commit('setProducts', apiProducts)
      localStorage.setItem('products', JSON.stringify(apiProducts))
    },
    async getProducts () {
      const localProductsString = localStorage.getItem('products') || '[]'
      const localProducts = JSON.parse(localProductsString)
      if (localProducts.length) {
        this.$store.commit('setProducts', localProducts)
        console.log(`${localProducts.length} products loaded from local storage`)
      } else {
        const response = await EppaService.getProducts()
        let apiProducts = response.data.results
        console.log(`get ${apiProducts.length} results`)
        console.log(apiProducts)
        this.$store.commit('setProducts', apiProducts)
        localStorage.setItem('products', JSON.stringify(apiProducts))
        console.log(`${apiProducts.length} saved on local storage`)
      }
    },
    loadWishlist () {
      this.$store.commit('setWishlist')
    },
    addToWishlist (product) {
      console.log(`adding product ${product.slug} to wishlist`)
      this.$store.commit('addToWishlist', product)
    }
  }
}
</script>

<style>
</style>
