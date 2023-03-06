<template>
  <div class="header-wrapper contentPage">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img
        src="../assets/logo-americanas-mini.png"
        alt="Logo EuMais"
        class="logo"
      />
    </router-link>
    <div class="routers">
      <h4>
        <router-link to="/list-store">produtos</router-link>
      </h4>
    </div>
    <div class="auth">
      <h3>
        <router-link to="/login">Login</router-link>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts" name="HeaderPage">
// const snippets = 'Snippets';
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  height: 80px;
}

.logo {
  height: 100%;
}
</style>
