<template>
  <div class="products-list">
    {{ menuItems }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FirebaseService from '@/services/FirebaseService'

export default defineComponent({
  data() {
    return {
      menuItems: []
    }
  },
  async created() {
    const items = await (await FirebaseService.get('/products/')).val()
    console.log(items)
    this.menuItems = items
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';
</style>
