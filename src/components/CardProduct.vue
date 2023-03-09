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
      <div class="separator q-mx-lg" />
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
  border: 2px solid $black;

  position: relative;

  box-shadow: 0.125rem 0.125rem 0px 0px $black;
  transition: all ease-out 0.2s;

  background-color: $tertiary;
  color: $black;
}

.card-wrapper:hover {
  box-shadow: 0.25rem 0.25rem $black;
  transition: all ease-in 0.1s;
}

.card-title {
  position: absolute;

  top: -1rem;
  left: -1rem;

  z-index: 10;
  padding: 0.5rem;
  max-width: 12rem;

  color: #ffffff;
  background: #ff0033;
  box-shadow: 2px 2px #121212;
  border: 2px solid #121212;

  font-weight: 700;
  font-size: 1rem;

  overflow: hidden;
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
  border-top: 2px solid $black;
  color: $black;
}

.card-description {
  overflow: overlay;

  font-weight: 600;

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
  background: $black;
}

.separator {
  border: 1px solid $dark;
  border-radius: 2px;
}
</style>
