<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-header">
      <div class="banner-top-header">
        <img
          src="https://images-americanas.b2w.io/spacey/acom/2023/02/28/pascoa23-topinho_home-desk-1296x54px-7321eac4de11.png"
          alt="banner americanas"
          height="48"
        />
      </div>
      <HeaderPage />
      <div class="banner-bottom-header">desafio front end EuLabs</div>
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
  // border-bottom: 2px solid #000000;
}

.banner-top-header {
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
}

.banner-bottom-header {
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
  font-weight: 600;
  background-color: white;
}
</style>
