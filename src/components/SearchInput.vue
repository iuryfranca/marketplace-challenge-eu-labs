<template>
  <div class="form-wrapper">
    <div class="form-content">
      <input required class="input-content" type="text" @input="handleChange" />
      <div class="button-search">
        <Search :size="21" color="#f80032" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { useProductsStore } from 'src/stores/products';

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
  max-width: 746px;
  padding: 0px 48px;
}

.input-content {
  outline: none;
  width: 100%;
  background: none;
  border: none;
  padding: 11px 0px 11px 16px;

  font-size: 16px;
  font-weight: 600;

  color: black;
}

.form-content {
  display: flex;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  height: 40px;
  box-shadow: rgb(0 0 0 / 12%) 0px 10px 15px;
  z-index: 0;
  position: relative;
}

.button-search {
  width: 40px;
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
