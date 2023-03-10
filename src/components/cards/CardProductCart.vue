<template>
  <div
    class="style-card-cart"
    :style="
      currentUrl === 'Home' && !Screen.xs && !Screen.sm
        ? 'grid-template-columns: 5.5rem 1fr'
        : ''
    "
  >
    <div v-if="currentUrl === 'SuccessPage'" class="amount-item-cart">
      {{ itemCart?.amount }}
    </div>
    <div class="image-content-cart">
      <img
        :src="itemCart?.image"
        class="image-wrapper"
        :alt="`Image ${itemCart?.title}`"
      />
    </div>
    <div style="width: auto">
      <div class="card-product-cart">
        <div card-product-cart-content>
          <div class="card-product-cart-title">
            {{ itemCart?.title }}
          </div>
          <div
            v-if="currentUrl === 'CartDetails' || currentUrl === 'SuccessPage'"
            class="card-description"
          >
            {{ itemCart?.description }}
          </div>
        </div>
      </div>
      <q-separator inset color="grey-1" />
      <ButtonControllerCart
        v-if="currentUrl !== 'SuccessPage'"
        :product="itemCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonControllerCart from 'components/ButtonControllerCart.vue';
import { ProductsCartProps } from 'src/types/_types';
import { PropType, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { Screen } from 'quasar';

const router = useRouter();
const currentUrl = computed(() => {
  return router.currentRoute.value.name;
});

const props = defineProps({
  itemCart: {
    type: Object as PropType<ProductsCartProps>,
  },
});
const { itemCart } = toRefs(props);
</script>

<style lang="scss">
.amount-item-cart {
  position: absolute;

  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;

  background-color: $dark;
  color: #ffffff;

  top: 0.3rem;
  right: 0.3rem;

  font-size: small;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
}

.style-card-cart {
  position: relative;
  display: grid;
  grid-template-columns: 8rem 1fr;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  border: 2px solid #121212;
  box-shadow: 0.125rem 0.125rem #121212;
  transition: all ease-out 0.2s;

  background-color: $tertiary;
  color: $dark;

  @media (max-width: $breakpoint-md-min) {
    grid-template-rows: 8rem 1fr;
    grid-template-columns: none;
  }
}

.style-card-cart:hover {
  box-shadow: 0.25rem 0.25rem $black;
  transition: all ease-in 0.1s;
}

.card-product-cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 0.5rem 0.5rem 0.5rem 0;

  gap: 0.625rem;
}

.image-content-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;

  @media (max-width: $breakpoint-md-min) {
    min-width: 20rem;
  }
}

.image-wrapper {
  height: 5rem;
}

.card-product-cart-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  padding-right: 5px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-weight: 700;
}
</style>
