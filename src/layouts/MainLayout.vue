<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-header">
      <div class="banner-top-header">
        <img
          src="https://images-americanas.b2w.io/spacey/acom/2023/02/28/pascoa23-topinho_home-desk-1296x54px-7321eac4de11.png"
          alt="banner americanas"
          height="48"
        />
        <!-- <img
          src="https://images-americanas.b2w.io/spacey/acom/2023/03/01/pascoa23-topinho-home-mobile-648x54px-afd913c8049b.png"
          alt="banner americanas"
          height="48"
        /> -->
      </div>
      <HeaderPage />
    </q-header>
    <q-page-container class="contentPage">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import HeaderPage from 'src/components/HeaderPage.vue';
</script>

<style lang="scss">
.q-header {
  background-color: #f80032;
  box-shadow: rgb(0 0 0 / 12%) 0px 10px 15px;
  border-bottom: 2px solid #000000;
}

.banner-top-header {
  height: 3rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
