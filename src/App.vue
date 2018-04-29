<template>
  <div id="app" class="app">
    <div id="navbar" class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/wishlist">Wishlist</router-link>
    </div>
    <router-view/>
    <div id="footer" class="footer">
      Eppa webclient 2018 - Powered by Vue.js
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
