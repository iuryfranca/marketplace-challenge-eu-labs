<template>
  <q-page>
    <div class="home-presentation-wrapper">
      <card-product :product="card" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CardProduct from 'src/components/CardProduct.vue';

const card = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
</script>

<style lang="scss">
.home-presentation-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 4rem;

  gap: 1rem;
}
</style>
