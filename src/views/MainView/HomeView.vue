<script setup lang="ts">
import ProductsDataGenerator from '@/components/DataGenerators/ProductsDataGenerator.vue'
import FirebaseLogin from '@/components/FirebaseLogin.vue'
</script>

<template>
  <div>Strona główna</div>
  <FirebaseLogin></FirebaseLogin>
  <ProductsDataGenerator></ProductsDataGenerator>
</template>
