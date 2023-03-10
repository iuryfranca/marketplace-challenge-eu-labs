<template>
  <div class="cart-button">
    <div v-if="drawer" class="page-mask button-cart-header" />
    <q-btn
      :disable="currentUrl !== 'Home'"
      flat
      color="#FFFFFF"
      class="noHover"
      @click="drawer = !drawer"
    >
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
      :width="350"
      :breakpoint="400"
      class="cart-drawer shadow-12"
    >
      <div class="cart-title-content">
        <h1>resumo carrinho</h1>
        <span class="row justify-between amount-total" style="width: 100%">
          <h4>total da compra:</h4>
          <h3>
            {{ priceFormatter(amountPriceCart) }}
          </h3>
        </span>
      </div>
      <q-scroll-area
        style="width: 100%; height: 100%; background-color: #ff0032"
      >
        <ListItemsCart v-if="amountItemsCart > 0" />
        <EmptyCartWarning v-if="amountItemsCart === 0" />
      </q-scroll-area>
      <div class="footer-page">
        <RouterLink :to="{ name: 'CartDetails' }">
          <button class="button-next-page shadow-5">
            <span>ver detalhes do carrinho</span>
          </button>
        </RouterLink>
      </div>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import ListItemsCart from 'components/ListItemsCart.vue';
import EmptyCartWarning from './EmptyCartWarning.vue';
import { ShoppingBag } from 'lucide-vue-next';
import { priceFormatter } from 'src/lib/utils';
import { storeToRefs } from 'pinia';
import { useCartStore } from 'src/stores/cart';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentUrl = computed(() => {
  return router.currentRoute.value.name;
});

const { amountItemsCart, amountPriceCart } = storeToRefs(useCartStore());
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
  padding-bottom: 1rem;
  gap: 0.5rem;

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

.footer-page {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100px;
  width: 100%;

  padding: 10px;
  padding-bottom: 1.5rem;
  padding-right: 0;

  background-color: $primary;
  color: $dark;
}

.button-next-page {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: large;
  font-weight: 700;

  border: none;
  border-radius: 8px 0 0 8px;
  padding: 1rem;

  cursor: pointer;

  background-color: $tertiary;
}
</style>
