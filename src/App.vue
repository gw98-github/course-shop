<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMenu from './components/Header/HeaderMenu.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <div>
      <nav><HeaderMenu /></nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<style>
body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
@import '@/assets/globals.scss';
main {
  padding: 20px 0 40px 0;
  @media (min-width: $tablet) {
    padding: 30px 5% 40px 5%;
  }

  @media (min-width: $desktop) {
    padding: 50px 10% 40px 10%;
  }
}
</style>
