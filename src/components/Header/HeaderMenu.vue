<template>
  <div class="header">
    <div class="menu-icon" v-if="isMobile" @click="openMobileMenu()"></div>

    <ModalComponent v-if="menuModal" @close="closeModal()">
      <HeaderMenuMobileElements v-if="isMobile" :menu-items="menuItems" @close="closeModal()" />
    </ModalComponent>
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
import HeaderMenuMobileElements from './HeaderMenuMobileElements.vue'
import LogoElement from './LogoElement.vue'
import ModalComponent from '../ModalComponent.vue'

export default defineComponent({
  data() {
    return {
      menuItems: menuRoutes,
      menuModal: false
    }
  },
  computed: {
    isMobile() {
      return DeviceResolutionService.device.isMobile
    }
  },
  methods: {
    openMobileMenu() {
      this.menuModal = true
    },
    closeModal() {
      this.menuModal = false
    },
    openSearch() {
      console.log('openSearch')
    }
  },
  components: { HeaderMenuDesktopElements, HeaderMenuMobileElements, LogoElement, ModalComponent }
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
  background-color: $background-primary-color;
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
