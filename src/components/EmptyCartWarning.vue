<template>
  <div class="empty-cart-wrapper">
    <h2>atualmente seu carrinho se encontra vazio 😊</h2>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
.empty-cart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 1rem;
  margin: 0.5rem;
  height: 18.75rem;

  border-radius: 0.625rem;
  border: 2px solid $dark;
  color: $dark;
  background-color: $tertiary;
}
</style>
