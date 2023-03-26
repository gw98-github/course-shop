<script setup lang="ts">
// import ProductsDataGenerator from '@/components/DataGenerators/ProductsDataGenerator.vue'
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()
</script>

<template>
  <div v-if="user !== undefined">
    <div v-if="user">
      <h3>Elementy rekomendowane dla Ciebie {{ user.providerData[0].displayName }}:</h3>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2020/11/03/13/33/online-shop-5709809_1280.png"
          alt=""
        />
      </div>
    </div>
    <div v-else>Zaloguj się aby zobaczyć więcej treści</div>
    <img src="https://live.staticflickr.com/65535/51060574953_733bf22dca_b.jpg" alt="" />
    <img src="https://live.staticflickr.com/65535/51060574953_733bf22dca_b.jpg" alt="" />
    <img src="https://live.staticflickr.com/65535/51060574953_733bf22dca_b.jpg" alt="" />
  </div>

  <!-- <ProductsDataGenerator></ProductsDataGenerator> -->
</template>
<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  letter-spacing: 1px;
  margin-bottom: 24px;
  font-family: 'Roboto', sans-serif;
}
</style>
