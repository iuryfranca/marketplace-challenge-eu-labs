<template>
  <div class="flex justify-end q-mt-md">
    <q-select
      v-model="optionsSelect"
      :options="optionsList"
      label="Exibir por:"
      class="select-list-by"
      clearable
      filled
      emit-value
    />
  </div>
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
</template>

<script setup lang="ts">
import CardProductSkeleton from 'src/components/skeleton/CardProductSkeleton.vue';
import CardProduct from 'src/components/cards/CardProduct.vue';
import { storeToRefs } from 'pinia';
import { useProductsStore } from 'src/stores/products';
import { ref, watch } from 'vue';

const { products, productsFiltered, loading, error } = storeToRefs(
  useProductsStore()
);
const { fetchProducts, getProductsByName, getProductsByPrice } =
  useProductsStore();

const optionsList = ['nome', 'preço'];
const optionsSelect = ref(null);

watch(optionsSelect, (newValue) => {
  if (newValue === 'nome') getProductsByName();
  if (newValue === 'preço') getProductsByPrice();
  if (newValue === null) fetchProducts();
});

// if (optionsSelect.value === '') fetchProducts();
if (products.value.length === 0) fetchProducts();
</script>

<style lang="scss">
.select-list-by {
  width: 10rem;
}

.home-presentation-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;

  margin-top: 2rem;
  padding-top: 1rem;
  gap: 3.5rem;

  @media (max-width: $breakpoint-md-min) {
    justify-content: center;
  }
}
</style>
