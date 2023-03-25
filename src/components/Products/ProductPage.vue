<template>
  <div>{{ product }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FirebaseService from '@/services/FirebaseService'

export interface Product {
  id: string
  name: string
  price: number
  photoUrl: number
  category: string
}

export default defineComponent({
  data() {
    return {
      product: {}
    }
  },
  async created() {
    const id = this.$route.params.id
    const item = await (await FirebaseService.get(`/products/${id}`)).val()
    this.product = item
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';
</style>
