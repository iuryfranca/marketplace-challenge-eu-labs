<template>
  <q-page>
    <div class="home-presentation-wrapper">
      <div
        v-for="product in productsFiltered.length > 0
          ? productsFiltered
          : products"
        :key="product.id"
      >
        <CardProduct v-if="products && !loading" :product="product" />
        <CardProductSkeleton v-else />
      </div>
    </div>
    <div class="error">{{ error }}</div>
  </q-page>
</template>

<script setup lang="ts">
import CardProductSkeleton from 'src/components/skeleton/CardProductSkeleton.vue';
import CardProduct from 'src/components/CardProduct.vue';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../stores/products';

const { products, productsFiltered, loading, error } = storeToRefs(
  useProductsStore()
);
const { fetchProducts } = useProductsStore();

fetchProducts();
</script>

<style lang="scss">
.home-presentation-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;

  margin-top: 3rem;
  padding-top: 1rem;
  gap: 4rem;

  @media (max-width: $breakpoint-md-min) {
    justify-content: center;
  }
}
</style>
