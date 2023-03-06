<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: #fed4f9">
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
