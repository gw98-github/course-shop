<template>
  <div class="menu">
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

  mounted() {
    console.log(this.menuItems)
  }
})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;

  .menu-item {
    background-color: #333;
    padding: 5px 10px;
    margin: 0 20px;

    h1 {
      font-size: 15px;
      color: white;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
