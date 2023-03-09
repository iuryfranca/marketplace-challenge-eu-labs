<template>
  <div class="header-wrapper contentPage">
    <RouterLink :to="{ name: 'Home' }" class="logo-group">
      <img src="../../assets/logo-americanas.svg" />
      <h1>mktplace</h1>
    </RouterLink>
    <SearchInput />
    <CartDrawer />
  </div>
</template>

<script setup lang="ts" name="HeaderPage">
import SearchInput from 'components/SearchInput.vue';
import CartDrawer from 'src/components/CartDrawer.vue';
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

  color: #ffffff;

  img {
    height: 2rem;
  }
}
</style>
