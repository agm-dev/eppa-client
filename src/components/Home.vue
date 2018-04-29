<template>
  <div class="home">
    <div class="search-box">
      <input type="text" v-model="searchText" @keypress.enter="searchByText">
      <button type="submit" @click="searchByText">Search</button>
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'Home',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    searchByText (e) {
      console.log(`searching by text: ${this.searchText}`)
    }
  },
  components: {
    'product-list': ProductList
  }
}
</script>

<style>
</style>
