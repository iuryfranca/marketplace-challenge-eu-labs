<template>
  <div class="card-amount-content shadow-12">
    <h1 style="padding: 1rem">resumo carrinho</h1>
    <span class="row justify-between amount-total" style="width: 100%">
      <h4>total da compra:</h4>
      <h3>
        {{ priceFormatter(amountPriceCart) }}
      </h3>
    </span>
    <div v-if="!paymentPage" class="footer-page" style="margin-right: -8px">
      <RouterLink :to="{ name: 'PaymentPage' }">
        <button
          :disabled="amountItemsCart === 0"
          class="button-next-page-cart-amount shadow-15"
        >
          <span>realizar o pagamento</span>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from 'src/stores/cart';
import { priceFormatter } from 'src/lib/utils';
import { storeToRefs } from 'pinia';
import { usePaymentStore } from 'src/stores/payment';
import { toRefs } from 'vue';

const { payment } = storeToRefs(usePaymentStore());
const { amountPriceCart, amountItemsCart } = storeToRefs(useCartStore());

const props = defineProps({
  paymentPage: {
    type: Boolean,
    required: false,
  },
});
const { paymentPage } = toRefs(props);
</script>

<style lang="scss">
.card-amount-content {
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: space-between;

  z-index: 1;
  gap: 1rem;
  padding: 1rem;
  height: min-content;

  color: #ffffff;
  border: 2px solid #1d1d1d;
  background-color: #ff0032;
}

.button-next-page-cart-amount {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: large;
  font-weight: 700;

  border: none;
  border-radius: 8px 0 0 8px;

  padding: 1rem;
  margin-right: -8px;

  cursor: pointer;

  background-color: $tertiary;
}
</style>
