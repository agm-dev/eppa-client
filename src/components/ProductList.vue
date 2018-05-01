<template>
  <div class="product-list product-list__container">
    <ul class="product-list__list">
      <li class="product-list__item" v-for="(product, index) in products" :key="index">
        <router-link v-bind:to="{ name: 'Product', params: { id: product.id, name: product.name } }">
          <div class="product">
            <div class="product__image">
              <img v-bind:src="product.image" alt="product-image">
            </div>
            <div class="product__details">
              <p>{{ product.name }}</p>
              <p>{{ product.prices[0].price }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['products']
}
</script>

<style>

</style>
