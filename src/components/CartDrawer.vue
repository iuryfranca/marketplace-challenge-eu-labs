<template>
  <div class="cart-button">
    <q-btn
      flat
      color="#FFFFFF"
      class="noHover button-cart"
      @click="drawer = !drawer"
    >
      <ShoppingBag :size="32" />
      <div v-if="amountItemsCart > 0" class="amount-items-cart">
        {{ amountItemsCart }}
      </div>
    </q-btn>
    <q-drawer
      v-model="drawer"
      show-if-above
      overlay
      side="right"
      :width="350"
      :breakpoint="400"
      class="cart-drawer shadow-12"
    >
      <h2 class="cart-title">resumo carrinho</h2>
      <q-img
        class="image-header-cart"
        src="https://i.pinimg.com/564x/d3/8f/a3/d38fa3f76dac9cfc79578b5eb17b7149.jpg"
      />
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ShoppingBag } from 'lucide-vue-next';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';

const { amountItemsCart } = storeToRefs(useCartStore());
const drawer = ref(false);
</script>

<style lang="scss">
.cart-drawer {
  display: flex;
  flex-direction: column;

  border-left: 2px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.button-cart {
  position: relative;
}

.amount-items-cart {
  position: absolute;

  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;

  background-color: white;
  color: black;

  top: 1.4rem;
  right: 0.5rem;

  font-size: small;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-title {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;

  background-color: $primary;
  border-bottom: 2px solid black;

  z-index: 1;
}

.image-header-cart {
  height: 200px;
  border-bottom: 2px solid black;
  img {
    filter: blur(2px) opacity(0.3);
  }
}
</style>
