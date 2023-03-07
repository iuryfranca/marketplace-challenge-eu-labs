<template>
  <div class="card-wrapper">
    <div class="card-title">
      {{ product?.title }}
    </div>

    <div class="image-content">
      <img
        :src="product?.image"
        alt="Product Image"
        class="image-product-wrapper"
      />
    </div>

    <div class="card-content">
      <div class="card-description">
        <span>{{ product?.description }}</span>
      </div>

      <q-separator spaced color="#000000" />

      <div class="cart-buttons-group">
        <h2>{{ priceFormatter(product?.price || 0) }}</h2>
        <button class="button-icons">
          <Plus />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="CardProduct">
import { PropType } from 'vue';
import { CardProductProps } from 'src/composables/_types';
import { Plus } from 'lucide-vue-next';
import { priceFormatter } from 'src/libs/utils';

defineProps({
  product: {
    type: Object as PropType<CardProductProps>,
  },
});
</script>

<style lang="scss">
.card-wrapper {
  display: flex;
  flex-direction: column;

  max-width: 20rem;
  border: 2px solid black;
  // border-radius: 0.25rem;
  box-shadow: 1px 1px 0px 0px #000000;

  cursor: pointer;
  position: relative;

  background-color: $primary;
}

.card-wrapper:hover {
  box-shadow: 0.2rem 0.2rem rgb(0, 0, 0);
  transition: all ease 0.25s;

  img {
    transform: scale(1.05);
    transition: all ease 1s;
  }
}

.card-title {
  position: absolute;

  top: -1rem;
  left: -1rem;

  max-width: 12rem;
  z-index: 10;

  background: $primary;
  border: 2px solid;

  font-size: 1rem;
  box-shadow: 2px 2px 0px 0px #000000;

  overflow: hidden;
  padding: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.image-content {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-height: 20rem;
  padding: 1rem;

  overflow: hidden;
  background-color: white;
}

.image-product-wrapper {
  height: 100%;
  width: auto;
  display: block;
}

.card-content {
  // padding: 1rem;
}

.card-description {
  padding: 0.5rem;
}

.cart-buttons-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  width: 100%;
}

.button-icons {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
}

.button-icons:hover {
  svg {
    transition: all ease 0.25s;
    transform: rotate(90deg);
  }
}
</style>
