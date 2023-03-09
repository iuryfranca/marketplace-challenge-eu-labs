<template>
  <div v-for="itemCart in itemsCart" :key="itemCart.id" class="cards-content">
    <CardProductCart :itemCart="itemCart" />
  </div>
</template>
<script setup lang="ts">
import CardProductCart from 'components/CardProductCart.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';

const { itemsCart } = storeToRefs(useCartStore());
</script>

<style lang="scss">
.cards-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.3rem;

  padding: 0.7rem;
}
</style>
