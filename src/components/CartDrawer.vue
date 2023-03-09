<template>
  <div class="cart-button">
    <div :class="drawer ? 'page-mask' : ''" />
    <q-btn flat color="#FFFFFF" class="noHover" @click="drawer = !drawer">
      <ShoppingBag :size="32" />
      <div v-if="amountItemsCart > 0" class="amount-items-cart">
        {{ amountItemsCart }}
      </div>
    </q-btn>
    <q-drawer
      v-model="drawer"
      :show-if-above="false"
      overlay
      elevated
      side="right"
      :width="400"
      :breakpoint="400"
      class="cart-drawer shadow-12"
    >
      <div class="cart-title-content">
        <h1>resumo carrinho</h1>
        <span class="row justify-between amount-total" style="width: 100%">
          <h4>Total da compra:</h4>
          <h3>
            {{ priceFormatter(amountPriceCart) }}
          </h3>
        </span>
      </div>
      <q-scroll-area
        style="width: 100%; height: 100%; background-color: #f80032"
      >
        <div
          v-for="itemCart in itemsCart"
          :key="itemCart.id"
          class="cards-content"
        >
          <CardProductCart :itemCart="itemCart" />
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import CardProductCart from 'components/CardProductCart.vue';
import { ShoppingBag } from 'lucide-vue-next';
import { priceFormatter } from 'src/lib/utils';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';
import { ref } from 'vue';

const { amountItemsCart, amountPriceCart, itemsCart } = storeToRefs(
  useCartStore()
);
const drawer = ref(false);
</script>

<style lang="scss">
.cart-drawer {
  display: flex;
  flex-direction: column;

  border-left: 2px solid $black;
  border-top: 2px solid $black;
}

.amount-items-cart {
  position: absolute;

  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;

  color: $black;
  background-color: white;

  top: 1.4rem;
  right: 0.5rem;

  font-size: small;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-title-content {
  display: flex;
  flex-direction: column;
  z-index: 1;

  padding: 0.5rem;
  gap: 1rem;

  border-bottom: 2px solid $dark;

  align-items: flex-end;
  justify-content: space-between;
  background-color: #ff0032;
}

.amount-total {
  width: 100%;
  background-color: #e7e7e7;
  padding: 10px;
  color: $dark;
  border: 2px solid $dark;
}

.cards-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.3rem;

  padding: 0.7rem;
}
</style>
