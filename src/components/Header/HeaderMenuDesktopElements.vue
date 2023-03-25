<template>
  <div class="menu-desktop">
    <RouterLink
      v-for="menuItem in menuItems"
      :key="menuItem.path"
      :to="menuItem.path"
      class="menu-item"
    >
      <h1>{{ menuItem.name }}</h1>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface MenuItem {
  name: string
  path: string
}

export default defineComponent({
  props: {
    menuItems: Array<MenuItem>
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

.menu-desktop {
  width: 100%;
  background-color: $background-primary-color;
  padding: 5px 0;
  display: flex;
  max-height: 40px;

  .menu-item {
    background-color: $button-primary-color;
    padding: 0 20px;
    margin: 0 10px;
    text-align: center;
    width: 11%;
    border-radius: 5px;

    h1 {
      font-size: 11px;
      color: white;

      @media (min-width: $desktop) {
        font-size: 16px;
      }
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
