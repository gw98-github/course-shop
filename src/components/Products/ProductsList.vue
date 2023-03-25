<template>
  <div class="products-list">
    <ProductElement v-for="product in products" :key="product" :product="product"></ProductElement>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FirebaseService from '@/services/FirebaseService'
import ProductElement from './ProductElement.vue'

export default defineComponent({
  data() {
    return {
      products: []
    }
  },
  async created() {
    const items = await (await FirebaseService.get('/products/')).val()
    this.products = items
  },
  components: { ProductElement }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';
</style>
