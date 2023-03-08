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
      :width="450"
      :breakpoint="400"
      class="cart-drawer shadow-12"
    >
      <div class="header-cart">
        <q-img
          class="image-header-cart absolute-top"
          src="https://i.pinimg.com/564x/d3/8f/a3/d38fa3f76dac9cfc79578b5eb17b7149.jpg"
        />
        <div class="cart-title-content">
          <h2>resumo carrinho</h2>
          <span class="row justify-between" style="width: 100%">
            <h4>Total da compra:</h4>
            <h3>
              {{ priceFormatter(amountPriceCart) }}
            </h3>
          </span>
        </div>
      </div>
      <q-scroll-area style="width: 100%; height: 100%">
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

  border-left: 2px solid #121212;
  border-top: 2px solid #121212;
}

.amount-items-cart {
  position: absolute;

  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;

  background-color: white;
  color: #121212;

  top: 1.4rem;
  right: 0.5rem;

  font-size: small;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
}

.header-cart {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  height: 20rem;
  border-bottom: 2px solid #121212;
  z-index: 1;
}

.image-header-cart {
  height: 227px;
  img {
    filter: blur(1px);
  }
}

.cart-title-content {
  display: flex;
  flex-direction: column;
  z-index: 1;

  width: 100%;
  height: 100%;

  padding: 0.5rem;

  align-items: flex-end;
  justify-content: space-between;
  background-color: #ff2c57ba;
}

.cards-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.65rem;

  padding: 0.7rem;
}
</style>
