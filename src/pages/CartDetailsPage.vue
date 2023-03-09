<template>
  <q-page>
    <div class="cart-page-wrapper">
      <q-scroll-area class="scroll-content shadow-12">
        <h1 class="title-list-items-cart">items carrinho</h1>
        <ListItemsCart v-if="amountItemsCart > 0" />
        <EmptyCartWarning v-if="amountItemsCart === 0" />
      </q-scroll-area>

      <div class="card-amount-content shadow-12">
        <h1>resumo carrinho</h1>
        <span class="row justify-between amount-total" style="width: 100%">
          <h4>total da compra:</h4>
          <h3>
            {{ priceFormatter(amountPriceCart) }}
          </h3>
        </span>
        <div class="footer-page" style="margin-right: -8px">
          <RouterLink :to="{ name: 'PaymentPage' }">
            <button
              :disabled="amountItemsCart === 0"
              class="button-next-page shadow-15"
            >
              <span>realizar o pagamento</span>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import ListItemsCart from 'src/components/ListItemsCart.vue';
import EmptyCartWarning from 'src/components/EmptyCartWarning.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';
import { priceFormatter } from 'src/lib/utils';

const { amountPriceCart, amountItemsCart } = storeToRefs(useCartStore());
</script>

<style lang="scss">
.cart-page-wrapper {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 350px;

  width: 100%;
  height: 100%;

  padding-top: 3rem;
}

.title-list-items-cart {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem;
  color: #ffffff;
}

.card-amount-content {
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: space-between;

  z-index: 1;
  gap: 0.5rem;
  padding: 0.5rem;
  height: min-content;

  color: #ffffff;
  border: 2px solid #1d1d1d;
  background-color: #ff0032;
}
.scroll-content {
  width: 100%;
  min-height: 700px;

  padding-right: 0.5rem;
  background-color: #f80032;
  border: 2px solid #1d1d1d;
}
</style>
