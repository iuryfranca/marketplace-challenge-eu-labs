<template>
  <div class="group-price-buttons">
    <span
      class="animation-text-price"
      :class="amountItemCart === 0 ? 'text-large' : 'text-medium'"
    >
      {{ priceFormatter(product?.price || 0) }}
    </span>

    <!-- TODO: Componentizar esses buttons -->
    <button
      v-if="amountItemCart === 0"
      class="btn-add-remove"
      @click="handleAddToCart"
    >
      <Plus color="#000000" />
    </button>

    <div class="group-controller-cart" v-else>
      <button class="btn-add-remove" @click="handleRemoveToCart">
        <X color="#000000" />
      </button>
      {{ getAmountItemCart(product?.id) }}
      <button class="btn-add-remove" @click="handleAddToCart">
        <Plus color="#000000" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next';
import { PropType, ref, toRefs } from 'vue';
import { useCartStore } from '../stores/cart';
import { CardProductProps } from 'src/types/_types';
import { priceFormatter } from 'src/lib/utils';

const props = defineProps({
  product: {
    type: Object as PropType<CardProductProps>,
  },
});
const { product } = toRefs(props);

const { addItem, removeItem, getAmountItemCart } = useCartStore();
const amountItemCart = ref(0);

const handleAddToCart = () => {
  if (product?.value) addItem(product?.value);
  else alert('Não foi possível adicionar esse produto ao carrinho');

  amountItemCart.value = getAmountItemCart(product?.value?.id);
};

const handleRemoveToCart = () => {
  if (product?.value) removeItem(product?.value.id);
  else alert('Não foi possível remover esse produto ao carrinho');

  amountItemCart.value = getAmountItemCart(product?.value?.id);
};
</script>

<style lang="scss">
.group-price-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 38px;

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

  background-color: $secondary;
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
  font-weight: 700;
  font-size: 1.4rem;
}

.text-medium {
  font-size: medium;
  font-weight: 600;
}
</style>
