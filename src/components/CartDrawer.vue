<template>
  <div class="cart-button">
    <q-btn flat color="#FFFFFF" class="noHover" @click="drawer = !drawer">
      <ShoppingBag />
    </q-btn>
    <q-drawer
      v-model="drawer"
      show-if-above
      overlay
      bordered
      side="right"
      :width="350"
      :breakpoint="400"
      class="cart-drawer"
    >
      <h2 class="cart-title">
        <TypewriterAnimation
          :display-text-array="[
            'cart',
            'carrinho de compras',
            'Eu Labs 🚌',
            'carrinho de compras',
            'desafio',
            'carrinho de compras',
          ]"
        />
      </h2>
      <q-img
        src="https://i.pinimg.com/564x/d3/8f/a3/d38fa3f76dac9cfc79578b5eb17b7149.jpg"
        style="height: 200px; border-bottom: 2px solid black"
      />

      <div>Teste</div>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ShoppingBag } from 'lucide-vue-next';
import { ref } from 'vue';
import TypewriterAnimation from './TypewriterAnimation.vue';

const drawer = ref(false);
</script>

<style lang="scss">
.cart-drawer {
  display: flex;
  flex-direction: column;

  border: 2px solid black;
}

.cart-popup {
  color: black;
}

.cart-title {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;

  background-color: $primary;
  border-bottom: 2px solid black;

  z-index: 1;
}
</style>
