<template>
  <div class="forms-credit-card">
    <q-input
      v-model="payment.card.number"
      label="número do cartão"
      :mask="'#### #### #### #### ####'"
      bg-color="white"
      outlined
      class="credit-card-number"
      required
      :rules="[(val) => !!val]"
    />

    <q-select
      v-model="payment.card.flag"
      :options="cardBrands"
      label="bandeira"
      bg-color="white"
      value=""
      outlined
      class="credit-card-flag"
      :rules="[(val) => !!val]"
    />
    <q-input
      v-model="payment.card.expiry"
      label="validade"
      :mask="'##/##'"
      placeholder="XX/XX"
      bg-color="white"
      outlined
      class="credit-card-expiry"
      :rules="[(val) => !!val]"
      required
    />

    <q-input
      v-model="payment.card.cvv"
      label="cvv"
      bg-color="white"
      outlined
      :mask="'###'"
      placeholder="XXX"
      class="credit-card-cvv"
      :rules="[(val) => !!val]"
      required
    />

    <q-input
      v-model="payment.card.owner"
      label="titular do cartão"
      bg-color="white"
      outlined
      class="credit-card-owner"
      :rules="[(val) => !!val]"
      required
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePaymentStore } from 'src/stores/payment';
import { ref } from 'vue';
const { payment } = storeToRefs(usePaymentStore());
const { inicializeValuesPayment } = usePaymentStore();
const cardBrands = ref([
  'Visa',
  'Mastercard',
  'Elo',
  'Hipercard',
  'American Express',
  'Diners Club International',
]);

inicializeValuesPayment();
</script>

<style lang="scss">
.forms-credit-card {
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 3%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    'number number number number number'
    'flag flag expiry expiry cvv'
    'owner owner owner owner owner';

  .q-field--with-bottom {
    padding-bottom: 0px;
  }
}

.credit-card-number {
  grid-area: number;
}

.credit-card-flag {
  grid-area: flag;
}

.credit-card-expiry {
  grid-area: expiry;
}

.credit-card-cvv {
  grid-area: cvv;
}

.credit-card-owner {
  grid-area: owner;
}
</style>
