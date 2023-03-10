<template>
  <div class="form-wrapper">
    <div v-if="onFocus" class="page-mask" />
    <div
      class="form-content"
      :class="currentUrl !== 'Home' ? 'disable-component-style' : ''"
    >
      <input
        required
        class="input-content"
        @focus="handleFocusIn"
        @blur="handleFocusOut"
        type="text"
        @input="handleChange"
      />
      <div class="button-search"><Search :size="21" color="#ff0032" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { useProductsStore } from 'src/stores/products';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentUrl = computed(() => {
  return router.currentRoute.value.name;
});

const onFocus = ref(false);
const handleFocusIn = () => (onFocus.value = true);
const handleFocusOut = () => (onFocus.value = false);

const { getSearchFilter } = useProductsStore();
const handleChange = (e: any) => {
  getSearchFilter(e.target.value);
};
</script>

<style lang="scss">
.form-wrapper {
  width: 100%;
  transition: all 0.1s ease-in-out 0s;
  will-change: top;
  flex: 5 1 0%;
  max-width: 46.625rem;
  padding: 0 1.875rem;
}

.input-content {
  outline: none;
  width: 100%;
  background: none;
  border: none;
  padding: 0.68rem 0px 0.68rem 1rem;

  font-size: 1rem;
  font-weight: 600;

  color: $black;
}

.form-content {
  display: flex;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 0.5rem;
  height: 2.5rem;
  z-index: 0;
  position: relative;
}

.button-search {
  width: 2.5rem;
  border: none;
  cursor: pointer;
  background: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
