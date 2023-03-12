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
