<template>
  <div class="card-wrapper">
    <div class="card-title">
      {{ product?.title }}
    </div>

    <div class="q-pt-xl q-pa-md image-content">
      <img
        :src="product?.image"
        :alt="`Product Image: ${product?.title}`"
        class="image-product-wrapper"
      />
    </div>

    <div class="card-content">
      <div class="card-description">
        <span>{{ product?.description }}</span>
      </div>

      <div class="separator" />

      <div class="cart-buttons-group">
        <h2>{{ priceFormatter(product?.price || 0) }}</h2>
        <button class="button-icons">
          <Plus color="#000000" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="CardProduct">
import { PropType } from 'vue';
import { CardProductProps } from 'src/types/_types';
import { Plus } from 'lucide-vue-next';
import { priceFormatter } from 'src/lib/utils';

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

  max-width: 14rem;
  border: 2px solid black;

  cursor: pointer;
  position: relative;

  box-shadow: 0.125rem 0.125rem 0px 0px #000000;
  transition: all ease-out 0.2s;

  background-color: $primary;
}

.card-wrapper:hover {
  box-shadow: 0.25rem 0.25rem rgb(0, 0, 0);
  transition: all ease-in 0.2s;
}

.card-title {
  position: absolute;

  top: -1rem;
  left: -1rem;

  max-width: 12rem;
  z-index: 10;

  background: $primary;
  border: 2px solid #000000;

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
  height: 14rem;

  overflow: hidden;
  background-color: white;
}

.image-product-wrapper {
  max-height: 6rem;
}

img {
  transition: all ease-out 1s;
}

.image-content:hover {
  img {
    transform: scale(1.5);
    transition: all ease 0.5s;
  }
}

.card-content {
  border-top: 2px solid #000000;
}

.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  max-height: 50px;
  margin: 1rem 0.5rem;
}

.separator {
  border: 0.5px solid #000000;
  margin: 0 0.5rem 0.5rem 0.5rem;
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
  cursor: pointer;

  padding: 0.5rem;
}

.button-icons:hover {
  svg {
    transition: all ease 0.25s;
    transform: rotate(90deg);
  }
}
</style>
