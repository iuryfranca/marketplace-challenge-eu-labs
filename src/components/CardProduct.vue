<template>
  <div class="card-wrapper">
    <div class="card-title">
      {{ product?.title }}
    </div>

    <div class="q-pt-xl q-pa-md image-content">
      <img
        :src="product?.image"
        :alt="`Product Image: ${product?.title}`"
        class="image-product"
      />
    </div>

    <div class="card-content">
      <div class="card-description">
        {{ product?.description }}
      </div>
      <q-separator inset color="grey-1" />
      <ButtonControllerCart :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts" name="CardProduct">
import ButtonControllerCart from 'components/ButtonControllerCart.vue';
import { PropType, toRefs } from 'vue';
import { CardProductProps } from 'src/types/_types';

//TODO: Esses props passando para outros props está muito feio, ir atrás de melhorar/otimizar
const props = defineProps({
  product: {
    type: Object as PropType<CardProductProps>,
  },
});
const { product } = toRefs(props);
</script>

<style lang="scss">
.card-wrapper {
  display: flex;
  flex-direction: column;

  max-width: 14.5rem;
  border: 2px solid #121212;

  position: relative;

  box-shadow: 0.125rem 0.125rem 0px 0px #121212;
  transition: all ease-out 0.2s;

  background-color: $primary;
}

.card-wrapper:hover {
  box-shadow: 0.25rem 0.25rem #121212;
  transition: all ease-in 0.1s;
}

.card-title {
  position: absolute;

  top: -1rem;
  left: -1rem;

  max-width: 12rem;
  z-index: 10;

  background: $primary;
  border: 2px solid #121212;

  font-size: 1rem;
  box-shadow: 2px 2px 0px 0px #121212;

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

.image-product {
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
  border-top: 2px solid #121212;
}

.card-description {
  overflow: overlay;

  height: 5rem;
  padding-right: 5px;
  margin: 1rem 0.5rem;
}

.card-description::-webkit-scrollbar {
  width: 3px;
}

.card-description::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.card-description::-webkit-scrollbar-thumb {
  background: #121212;
}
</style>
