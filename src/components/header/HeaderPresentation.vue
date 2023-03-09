<template>
  <div class="banner-bottom-header">
    <TypewriterAnimation :display-text-array="textsTypewriter" />
  </div>
</template>

<script setup lang="ts">
import TypewriterAnimation from '../TypewriterAnimation.vue';

const textsTypewriter = [
  'desafio front-end',
  'mktplace | challenger',
  'Eu Labs 🚌',
  'starting 🚀 # code 💻 # coffee ☕',
  'typescript | javascript | vue3 | quasar | pinia | scss',
];
</script>

<style lang="scss">
.banner-bottom-header {
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: $black;
  font-weight: 600;
  background-color: white;
}
</style>
