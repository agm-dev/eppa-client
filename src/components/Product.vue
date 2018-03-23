<template>
  <v-card class="card">
    <v-card-media :src="product.image" height="200px" class="card-media">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12>
            <span class="price">{{ product.prices[0].price }} {{ product.prices[0].currency }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title primary-title>
      <v-container fill-height fluid>
        <v-layout fill-height>
          <div>{{ product.name }}</div>
        </v-layout>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      image: String,
      name: String,
      prices: [{
        price: Number,
        currency: String
      }]
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 10px;
}
.card-media {
  text-align: left;
  color: #fff;
}
.price {
  font-size: 20px;
  color: #fff;
  background-color: #222;
  padding: 3px;
}
</style>
