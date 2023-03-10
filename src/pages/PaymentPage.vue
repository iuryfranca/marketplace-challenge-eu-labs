<template>
  <q-page>
    <div class="payment-page-wrapper">
      <div class="shadow-12">
        <h1 class="title-list-items-cart">dados para pagamento</h1>
        <div class="card-payment-content">
          <h4 style="align-self: end">dados cartão</h4>
          <CardDataFom />
          <h4 style="align-self: end">dados cliente</h4>
          <PeopleDataForm />
          <h4 style="align-self: end">forma de pagamento</h4>
          <div class="forms__payment-method">
            <q-select
              v-model="payment.paymentMethod"
              :options="paymentMethodOptions"
              label="forma de pagamento"
              bg-color="white"
              outlined
              class="forms__payment-method-select"
              required
            />
            <q-select
              v-model="payment.card.installments"
              v-if="payment.paymentMethod === 'Crédito'"
              :options="installmentsOptions"
              label="Parcelamento"
              bg-color="white"
              outlined
              :value="installmentsOptions[0]"
              class="forms__payment-method-select"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <CartAmountTotal paymentPage />

        <div class="card-button-finally">
          <button
            class="button-next-page-cart-amount shadow-15"
            style="margin-right: -1rem"
            :disabled="!isObjectEmpty"
            @click="handleFinallyPayment"
          >
            finalizar compra
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CardDataFom from 'src/components/payment/CardDataFom.vue';
import PeopleDataForm from 'src/components/payment/PeopleDataForm.vue';
import CartAmountTotal from 'src/components/CartAmountTotal.vue';

import { priceFormatter } from 'src/lib/utils';
import { computed, onMounted } from 'vue';

import { useCartStore } from 'src/stores/cart';
import { storeToRefs } from 'pinia';
import { usePaymentStore } from 'src/stores/payment';

const { inicializeValuesPayment } = usePaymentStore();
inicializeValuesPayment();

const { payment, isObjectEmpty } = storeToRefs(usePaymentStore());
const { amountPriceCart } = storeToRefs(useCartStore());

const paymentMethodOptions = ['Dinheiro', 'Débito', 'Crédito'];

onMounted(() => {
  payment.value.card.installments = installmentsOptions.value[0];
});

const installmentsOptions = computed(() => {
  return installments(amountPriceCart.value);
});

const installments = (amount = 0) => {
  if (amount <= 50) return [`1x de ${priceFormatter(amount)}`];
  else
    return [
      `1x de ${priceFormatter(amount)}`,
      `2x de ${priceFormatter(amount / 2)}`,
    ];
};

const handleFinallyPayment = () => {
  console.log('Ir para pag de sucesso', payment.value);
};
</script>

<style lang="scss">
.payment-page-wrapper {
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
  background-color: $primary;
  border: 2px solid #1d1d1d;
  border-bottom: none;

  @media (max-width: $breakpoint-md-min) {
    display: none;
  }
}

.card-button-finally {
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: space-between;

  z-index: 1;
  gap: 0.5rem;
  padding: 1rem;
  height: min-content;

  color: #ffffff;
  border: 2px solid #1d1d1d;
  border-top: none;
  background-color: #ff0032;
}

.card-payment-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  padding: 1rem;

  background-color: $primary;
  border: 2px solid #1d1d1d;
  color: #ffffff;
}

.forms__payment-method {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.forms__payment-method-select {
  font-weight: 600;
  min-width: 15rem;
}
</style>
