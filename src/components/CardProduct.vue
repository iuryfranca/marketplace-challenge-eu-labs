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
        <p>{{ product?.description }}</p>
      </div>

      <div class="cart-buttons-group">
        <label>{{ product?.price }}</label>
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

  transition: all ease 0.2s;
  background-color: #fe3558;
}

.card-title {
  position: absolute;

  top: -1rem;
  left: -1rem;

  width: 12rem;

  background: #fe3558;
  border: 2px solid;

  font-size: 1rem;
  box-shadow: 2px 2px 0px 0px #000000;

  overflow: hidden;
  padding: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-content {
  padding: 0.5rem;
}

.card-description {
  padding: 0.5rem;
}

.card-wrapper:hover {
  box-shadow: 3px 3px rgb(0, 0, 0);
  transition: all ease 0.2s;
}

.image-content {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-height: 20rem;
  padding: 0.5rem;

  overflow: hidden;
  background-color: white;
}

.image-product-wrapper {
  height: 100%;
  width: auto;
  display: block;
}

.cart-buttons-group {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
}

.button-icons {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
}

svg:hover {
  transition: all ease 0.25s;
  transform: rotate(90deg);
}
</style>
