import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wishlist from '@/components/Wishlist'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '/product/:slug',
      name: 'Product',
      component: Product
    }
  ]
})
