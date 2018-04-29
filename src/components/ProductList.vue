<template>
  <div class="product-list product-list__container">
    <ul class="product-list__list">
      <li class="product-list__item" v-for="(product, index) in products" :key="index">
        <router-link v-bind:to="{ name: 'Product', params: { id: product.id, name: product.name } }">
          <span>{{product.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      products: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' }
      ]
    }
  }
}
</script>

<style>

</style>
