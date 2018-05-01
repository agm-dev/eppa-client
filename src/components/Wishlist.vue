<template>
  <div class="page">
    <div class="product-list product-list__container">
      <ul class="product-list__list">
        <li class="product-list__item" v-for="(product, index) in wishlist" :key="index">
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
                <button @click="removeFromWishlist(product)">Remove from Wishlist</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  computed: {
    wishlist () {
      return this.$store.state.wishlist
    }
  },
  mounted () {
    if (!this.$store.state.wishlist.length) {
      this.$store.commit('setWishlist')
    }
  },
  methods: {
    removeFromWishlist (product) {
      console.log(`removing product ${product.slug} from wishlist`)
      this.$store.commit('removeFromWishlist', product)
    }
  }
}
</script>

<style>
</style>
