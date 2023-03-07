<template>
  <div class="header-wrapper contentPage">
    <router-link :to="{ name: 'Home' }" class="logo-group">
      <img src="../assets/logo-americanas.svg" />
      <h1>mktplace</h1>
    </router-link>

    <div class="auth-cart">
      <ShoppingBag />
    </div>
  </div>
</template>

<script setup lang="ts" name="HeaderPage">
import { ShoppingBag } from 'lucide-vue-next';
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  height: 5rem;
}

.logo-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  max-height: 5rem;

  img {
    height: 2rem;
  }
}

.auth-cart {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
