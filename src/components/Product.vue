<template>
  <div class="product">
    <img class="product__image" src="" alt="product-image">
    <div class="product__details">
      <p>Name: {{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      name: this.$route.params.name
    }
  }
}
</script>

<style>

</style>
