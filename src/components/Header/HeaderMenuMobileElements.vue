<template>
  <div class="menu-mobile">
    <RouterLink
      :to="menuItem.path"
      class="menu-item"
      @click="closeModal()"
      v-for="menuItem in menuItems"
      :key="menuItem.path"
      ><h1>{{ menuItem.name }}</h1></RouterLink
    >
  </div>
  <FirebaseLogin></FirebaseLogin>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FirebaseLogin from '../FirebaseLogin.vue'

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
  },
  components: { FirebaseLogin }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

.menu-mobile {
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  align-items: center;

  .menu-item {
    background-color: $button-primary-color;
    padding: 0 20px;
    margin: 0 10px;
    text-align: center;
    width: 90%;
    border-radius: 5px;

    h1 {
      font-size: 14px;
      color: white;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
