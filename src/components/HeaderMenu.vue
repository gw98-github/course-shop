<template>
  <div class="menu-desktop" v-if="!isMobile">
    <div class="menu-item">
      <h1>Produkty</h1>
    </div>
    <div class="menu-item" v-for="menuItem in menuItems" :key="menuItem.path">
      <RouterLink :to="menuItem.path"
        ><h1>{{ menuItem.name }}</h1></RouterLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { menuRoutes } from '@/router/index'
import DeviceResolutionService from '@/services/DeviceResolutionService'

export interface MenuItem {
  name: string
  path: string
}

export default defineComponent({
  data() {
    return {
      menuItems: menuRoutes
    }
  },
  computed: {
    isMobile() {
      return DeviceResolutionService.device.isMobile
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';

.menu-desktop {
  background-color: #ddd;
  padding: 20px;
  display: flex;
  max-height: 40px;

  .menu-item {
    background-color: #333;
    padding: 0 20px;
    margin: 0 10px;
    text-align: center;
    width: 11%;
    border-radius: 5px;

    h1 {
      font-size: 12px;
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
