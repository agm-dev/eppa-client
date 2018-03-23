<template>
  <v-container>
    <v-layout row wrap>
      <v-flex v-for="(product, i) in products" :key="i" xs4>
        <product :product="product" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Product from '@/components/Product'

const clientId = process.env.CLIENT_ID
const apiUrl = process.env.API_URL
const apiProduct = process.env.API_PRODUCT

export default {
  name: 'Home',
  data () {
    return {
      products: [],
      loading: false
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.loading = true
      axios.get(`${apiUrl}${apiProduct}?client_id=${clientId}`)
        .then(data => {
          this.loading = false
          const response = (data && data.data) ? data.data : null
          console.log(response)
          if (response && response.status && response.status === 'OK' && response.results) {
            console.log(response.message)
            console.log(`${response.page} / ${response.pages}`)
            this.products = response.results
          } else {
            console.error(response.message)
          }
        })
        .catch(err => {
          this.loading = false
          console.error(err)
        })
    }
  },
  components: {
    Product
  }
}
</script>
