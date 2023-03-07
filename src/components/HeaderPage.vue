<template>
  <div class="header-wrapper contentPage">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img
        src="../assets/logo-americanas-mini.png"
        alt="Logo EuMais"
        class="logo"
      />
    </router-link>
    <!-- <div class="routers">
      <h4>
        <router-link to="/list-store">produtos</router-link>
      </h4>
    </div> -->
    <div class="auth-cart">
      <ShoppingBag />
      <h3>
        <q-chip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          Login
        </q-chip>
      </h3>
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

.logo {
  height: 100%;
}

.auth-cart {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
