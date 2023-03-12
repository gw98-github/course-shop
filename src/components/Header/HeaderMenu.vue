<template>
  <div class="header">
    <LogoElement></LogoElement>
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
  components: { HeaderMenuDesktopElements, LogoElement }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';
.header {
  height: 70px;
  padding: 0 10px;
  width: auto;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: $tablet) {
    height: 120px;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
