<template>
  <div class="banner-top-header">
    <img
      v-if="!Screen.xs && !Screen.sm"
      src="https://images-americanas.b2w.io/spacey/acom/2023/02/28/pascoa23-topinho_home-desk-1296x54px-7321eac4de11.png"
      alt="banner americanas"
      height="48"
    />
    <img
      v-if="Screen.xs || Screen.sm"
      src="https://images-americanas.b2w.io/spacey/acom/2023/03/01/pascoa23-topinho-home-mobile-648x54px-afd913c8049b.png"
      alt="banner americanas"
      height="48"
    />
  </div>
</template>

<script setup lang="ts">
import { Screen } from 'quasar';
</script>

<style lang="scss">
.banner-top-header {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
}
</style>
