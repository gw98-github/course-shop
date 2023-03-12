<template>
  <div class="menu-mobile">
    <div class="menu-item">
      <h1>Produkty</h1>
    </div>
    <div class="menu-item" @click="closeModal()" v-for="menuItem in menuItems" :key="menuItem.path">
      <RouterLink :to="menuItem.path"
        ><h1>{{ menuItem.name }}</h1></RouterLink
      >
    </div>
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
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

.menu-mobile {
  width: 100%;
  background-color: #ddd;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  align-items: center;

  .menu-item {
    background-color: #333;
    padding: 0 20px;
    margin: 0 10px;
    text-align: center;
    width: 90%;
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
