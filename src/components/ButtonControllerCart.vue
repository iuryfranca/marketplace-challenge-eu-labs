<template>
  <div class="group-price-buttons">
    <span
      class="animation-text-price"
      :class="
        getAmountItemCart(product?.id) === 0 ? 'text-large' : 'text-medium'
      "
    >
      <span v-if="currentUrl !== 'Home'" style="font-size: x-small">
        {{ product!.price }}x{{ product!.amount }}
      </span>
      {{ priceFormatter(product!.price * product!.amount || 0) }}
    </span>

    <q-btn
      v-if="getAmountItemCart(product?.id) === 0"
      class="btn-add-remove"
      size="sm"
      color="primary"
      @click="handleActionToCart('add')"
    >
      <Plus color="#121212" :size="22" />
    </q-btn>

    <div
      class="group-controller-cart"
      v-if="getAmountItemCart(product?.id) !== 0"
    >
      <q-btn
        class="btn-add-remove"
        style="background-color: #e7e7e7"
        size="sm"
        @click="handleActionToCart('remove')"
      >
        <Minus color="#121212" :size="22" />
      </q-btn>
      {{ getAmountItemCart(product?.id) }}
      <q-btn
        class="btn-add-remove"
        style="background-color: #e7e7e7"
        size="sm"
        @click="handleActionToCart('add')"
      >
        <Plus color="#121212" :size="22" />
      </q-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Plus, Minus } from 'lucide-vue-next';
import { PropType, computed, toRefs } from 'vue';
import { useCartStore } from 'src/stores/cart';
import { ProductsCartProps } from 'src/types/_types';
import { priceFormatter } from 'src/lib/utils';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentUrl = computed(() => {
  return router.currentRoute.value.name;
});

const props = defineProps({
  product: {
    type: Object as PropType<ProductsCartProps>,
  },
});
const { product } = toRefs(props);

const { addItem, removeItem, getAmountItemCart } = useCartStore();

const handleActionToCart = (action: 'add' | 'remove') => {
  if (!product?.value) return;
  if (action === 'add') addItem(product?.value);
  if (action === 'remove') removeItem(product?.value.id);
};
</script>

<style lang="scss">
.group-price-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 3rem;

  margin: 0.5rem 0.5rem;
}

.group-controller-cart {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 6px;
  gap: 8px;

  border-radius: 5px;

  background-color: $primary;
  color: #ffffff;
  font-weight: 700;

  transition: all ease-in 0.2s;
}

.btn-add:hover {
  svg {
    transition: all ease 0.25s;
    transform: rotate(90deg);
  }
}

.animation-text-price {
  width: 6.8rem;
  transition: all ease 0.2s;
}

.text-large {
  font-weight: 800;
  font-size: 1.4rem;
}

.text-medium {
  font-size: 1.1rem;
  font-weight: 800;
}
</style>
