<template>
  <div class="header">
    <div class="menu-icon" v-if="isMobile" @click="openMobileMenu()"></div>
    <LogoElement></LogoElement>
    <div class="search-icon" v-if="isMobile" @click="openSearch()"></div>
    <HeaderMenuDesktopElements v-if="!isMobile" :menu-items="menuItems" class="desktop-items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { menuRoutes } from '@/router/index'
import DeviceResolutionService from '@/services/DeviceResolutionService'
import HeaderMenuDesktopElements from './HeaderMenuDesktopElements.vue'
import LogoElement from './LogoElement.vue'

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
  },
  methods: {
    openMobileMenu() {
      console.log('openMenu')
    },
    openSearch() {
      console.log('openSearch')
    }
  },
  components: { HeaderMenuDesktopElements, LogoElement }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

@mixin icon($theme: green) {
  height: 20px;
  width: 20px;
  background: $theme;
  cursor: pointer;
}

.header {
  height: 70px;
  padding: 0 10px;
  width: auto;
  background-color: aquamarine;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: $tablet) {
    flex-direction: column;
    height: 120px;
    justify-content: center;
    align-items: flex-start;
  }

  .menu-icon {
    @include icon;
  }

  .search-icon {
    @include icon(blue);
  }
}
</style>
