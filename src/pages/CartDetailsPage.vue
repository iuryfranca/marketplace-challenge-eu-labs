<template>
  <q-page>
    <div class="cart-page-wrapper">
      <div>
        <h1 class="title-list-items-cart">items carrinho</h1>
        <q-scroll-area class="scroll-content shadow-12">
          <ListItemsCart v-if="amountItemsCart > 0" />
          <EmptyCartWarning v-if="amountItemsCart === 0" />
        </q-scroll-area>
      </div>
      <CartAmountTotal />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import ListItemsCart from 'src/components/ListItemsCart.vue';
import EmptyCartWarning from 'src/components/EmptyCartWarning.vue';
import CartAmountTotal from 'src/components/CartAmountTotal.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';

const { amountItemsCart } = storeToRefs(useCartStore());
</script>

<style lang="scss">
.cart-page-wrapper {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 350px;

  width: 100%;
  height: 100%;

  padding-top: 3rem;

  @media (max-width: $breakpoint-md-min) {
    grid-template-columns: none;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1rem;
    gap: 1rem;
  }
}

.title-list-items-cart {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem;
  color: #ffffff;
  background-color: #f80032;
  border: 2px solid #1d1d1d;
  border-bottom: none;

  @media (max-width: $breakpoint-md-min) {
    display: none;
  }
}

.scroll-content {
  width: 100%;
  height: 50vh;

  padding-right: 0.5rem;
  background-color: #f80032;
  border: 2px solid #1d1d1d;

  @media (max-width: $breakpoint-md-min) {
    height: 28rem;
  }
}
</style>
