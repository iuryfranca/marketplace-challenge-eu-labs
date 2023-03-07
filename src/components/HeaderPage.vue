<template>
  <div class="header-wrapper contentPage">
    <router-link :to="{ name: 'Home' }" class="logo-group">
      <img src="../assets/logo-americanas.svg" />
      <h1>mktplace</h1>
    </router-link>
    <!-- <div class="routers">
      <h4>
        <router-link to="/list-store">produtos</router-link>
      </h4>
    </div> -->
    <div class="auth-cart">
      <ShoppingBag />
      <!-- <h3>
        <q-chip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          Login
        </q-chip>
      </h3> -->
    </div>
  </div>
</template>

<script setup lang="ts" name="HeaderPage">
import { ShoppingBag } from 'lucide-vue-next';
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  height: 5rem;
}

.logo-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  max-height: 5rem;

  img {
    height: 2rem;
  }
}

.auth-cart {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
