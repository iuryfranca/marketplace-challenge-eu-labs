<template>
  <q-page id="q-page">
    <div id="success-page-wrapper" class="success-page-wrapper">
      <span class="title-success-page">
        <div class="flex justify-end q-gutter-sm">
          <h1 ca>parabéns!</h1>
          <h1>sua compra foi um sucesso, confira a seguir os detalhes</h1>
        </div>
        <CheckCircle2 :size="150" color="#21ba45" style="" />
      </span>
      <div class="success-list-content">
        <div class="success-group-products">
          <ListItemsCart />
        </div>

        <div class="success-group-people">
          <div class="success-page-labels">
            <h3>nome cliente</h3>
            <p>{{ paymentSuccess!.peopleName }}</p>
          </div>
          <div class="success-page-labels">
            <h3>data de nascimento</h3>
            <p>{{ paymentSuccess!.birth }}</p>
          </div>
          <div class="success-page-labels">
            <h3>cpf</h3>
            <p>{{ paymentSuccess!.cpfCnpj }}</p>
          </div>
          <div class="success-page-labels">
            <h3>telefone para contato</h3>
            <p>{{ paymentSuccess!.phone }}</p>
          </div>
        </div>
        <div class="success-group-total">
          <div class="success-page-labels">
            <h3>forma de pagamento</h3>
            <p>{{ paymentSuccess!.paymentMethod }}</p>
          </div>
          <div
            v-if="paymentSuccess!.installments.length > 0"
            class="success-page-labels"
          >
            <h3>parcelamento</h3>
            <p>{{ paymentSuccess!.installments }}</p>
          </div>
          <div
            v-if="paymentSuccess!.installments.length > 0"
            class="success-page-labels"
          >
            <h3>total</h3>
            <p>{{ priceFormatter(amountPriceCart) }}</p>
          </div>
        </div>
      </div>
    </div>
    <q-btn
      color="primary"
      class="fixed-bottom-right"
      style="bottom: 1rem; right: 1rem"
      round
      size="1.5rem"
      @click="print"
      label="print"
    >
      <Printer />
    </q-btn>
  </q-page>
</template>

<script setup lang="ts">
import ListItemsCart from 'src/components/ListItemsCart.vue';
import { storeToRefs } from 'pinia';
import { usePaymentStore } from 'src/stores/payment';
import { useCartStore } from 'src/stores/cart';
import { priceFormatter } from 'src/lib/utils';
import { CheckCircle2 } from 'lucide-vue-next';
import { Printer } from 'lucide-vue-next';

const { inicializeValuesPayment } = usePaymentStore();
inicializeValuesPayment();

const { paymentSuccess } = storeToRefs(usePaymentStore());
const { amountPriceCart } = storeToRefs(useCartStore());

const print = async () => {
  const printContent = document.getElementById('q-page');
  const WindowPrt = window.open(
    '',
    '',
    'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0'
  );
  if (WindowPrt && printContent) {
    var location = window.location.href;
    if (location.indexOf('?app=true') > -1) {
      document.write(
        '<link rel="stylesheet" type="text/css" href="success-page.css" />'
      );
    }

    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.write(
      '<link rel="stylesheet" type="text/css" href="success-page.css">'
    );
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    // WindowPrt.close();
  }
};
</script>

<style lang="scss">
.success-page-wrapper {
  position: relative;
  padding: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  border-radius: 10px;
  border: 2px solid #9e9e9e;
}

.title-success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  margin: 1rem;
  margin-bottom: 3rem;
}

.success-list-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'people total'
    'items items';
  gap: 1rem;

  @media (max-width: $breakpoint-md-min) {
    grid-auto-columns: 1fr 1fr 1fr !important;
    grid-template-areas:
      'people people '
      'total total'
      'items items' !important;
  }
}

.success-group-products {
  grid-area: items;
  align-items: flex-end;

  padding: 1rem;

  border-radius: 10px;
  border: 2px solid #9e9e9e;
}

.success-group-people {
  grid-area: people;
  align-items: end;

  height: 100%;
  width: 100%;
  padding: 1rem;

  border-radius: 10px;
  border: 2px solid #9e9e9e;
}

.success-group-total {
  grid-area: total;
  align-items: end;

  height: 100%;
  width: 100%;

  padding: 1rem;

  border-radius: 10px;
  border: 2px solid #9e9e9e;
}

.success-page-labels {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
