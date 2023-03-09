<template>
  <div class="empty-cart-wrapper">
    <h2>atualmente seu carrinho se encontra vazio 😊</h2>
  </div>
</template>

<script setup lang="ts">
const snippets = 'Snippets';
</script>

<style lang="scss">
.empty-cart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 1rem;
  margin: 0.5rem;
  height: 300px;

  border-radius: 10px;
  border: 2px solid $dark;
  color: $dark;
  background-color: $tertiary;
}
</style>
