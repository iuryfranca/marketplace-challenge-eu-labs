<template>
  <div class="snippets-style">
    <p>New Component with: {{ snippets }}</p>
  </div>
</template>

<script setup lang="ts">
const snippets = 'Snippets';
</script>

<style lang="scss">
.snippets-style {
  width: 100%;
}
</style>
