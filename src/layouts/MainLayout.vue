<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-header">
      <HeaderBanner />
      <HeaderPage />
      <HeaderPresentation />
    </q-header>
    <q-page-container class="contentPage">
      <RouterView />
    </q-page-container>
    <!-- <q-footer class="shadow-up-8">
      <FooterPage />
    </q-footer> -->
  </q-layout>
</template>

<script setup lang="ts">
import HeaderBanner from 'components/header/HeaderBanner.vue';
import HeaderPage from 'components/header/HeaderPage.vue';
import HeaderPresentation from 'components/header/HeaderPresentation.vue';
import FooterPage from 'components/FooterPage.vue';
</script>

<style lang="scss">
.q-header {
  background-color: #f80032;
  box-shadow: rgb(0 0 0 / 12%) 0px 10px 15px;
}
</style>
