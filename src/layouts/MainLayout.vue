<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: #fe3558cc">
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
