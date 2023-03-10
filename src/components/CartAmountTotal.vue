<template>
  <div class="card-amount-content shadow-12">
    <h1 style="padding: 1rem">resumo carrinho</h1>
    <span class="row justify-between amount-total" style="width: 100%">
      <h4>total da compra:</h4>
      <h3>
        {{ priceFormatter(amountPriceCart) }}
      </h3>
    </span>
    <div class="footer-page" style="margin-right: -8px">
      <RouterLink v-if="!payment" :to="{ name: 'PaymentPage' }">
        <button
          :disabled="amountItemsCart === 0"
          class="button-next-page shadow-15"
        >
          <span>realizar o pagamento</span>
        </button>
      </RouterLink>
      <button v-if="payment" class="button-next-page shadow-15">
        finalizar compra
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';
import { priceFormatter } from 'src/lib/utils';
import { toRefs } from 'vue';

const { amountPriceCart, amountItemsCart } = storeToRefs(useCartStore());

const props = defineProps({
  payment: {
    type: Boolean,
    required: false,
  },
});
const { payment } = toRefs(props);
</script>

<style lang="scss">
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
</style>
