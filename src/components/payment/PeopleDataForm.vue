<template>
  <div class="forms-data-people">
    <q-input
      v-model="payment.card.peopleName"
      maxlength="15"
      class="nameClient"
      outlined
      bg-color="white"
      label="nome"
      required
      :rules="[(val) => !!val]"
    />

    <q-input
      v-model="payment.card.phone.number"
      maxlength="15"
      class="numberPhone"
      outlined
      bg-color="white"
      label="celular *"
      :mask="'(##) #####-####'"
      required
      :rules="[(val) => !!val]"
    />
    <q-input
      v-model="payment.card.cpfCnpj"
      bg-color="white"
      class="cpfCnpj"
      outlined
      label="CPF/CNPJ"
      mask="###.###.###-##"
      fill-mask
      :rules="[(val) => !!val]"
    />
    <q-input
      v-model="payment.card.birth"
      bg-color="white"
      class="birthDate"
      outlined
      label="data nascimento"
      mask="##/##/####"
      fill-mask
      :error="false"
      :rules="[(val) => !!val]"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePaymentStore } from 'src/stores/payment';
const { payment } = storeToRefs(usePaymentStore());
const { inicializeValuesPayment } = usePaymentStore();

inicializeValuesPayment();
</script>

<style lang="scss">
.forms-data-people {
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 3%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'nameClient nameClient nameClient'
    'numberPhone cpfCnpj birthDate';

  .q-field--with-bottom {
    padding-bottom: 0px;
  }

  .nameClient {
    grid-area: nameClient;
  }
  .numberPhone {
    grid-area: numberPhone;
  }
  .cpfCnpj {
    grid-area: cpfCnpj;
  }
  .birthDate {
    grid-area: birthDate;
  }
}
</style>
