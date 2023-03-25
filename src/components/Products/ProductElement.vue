<template>
  <RouterLink :to="`/product/${productObject.id}`" class="product-card">
    <div class="product-image">
      <img
        width="200"
        height="200"
        src="https://cdn.pixabay.com/photo/2023/03/17/20/42/camera-7859402_960_720.jpg"
        alt="Product Photo"
      />
    </div>
    <div class="product-info">
      <h2 class="product-name">{{ productObject.name }}</h2>
      <div class="product-meta">
        <span class="product-category">{{ productObject.category }}</span>
      </div>
      <div class="product-price">{{ productObject.price }} zł</div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
      productObject: this.product as Product
    }
  },
  props: {
    product: Object
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

.product-card {
  display: flex;
  text-decoration: none;
  color: inherit;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: $tablet) {
    flex-direction: row;
  }
}

.product-card:hover {
  background: #eee;
}

.product-image {
  max-width: max-content;
  margin-right: 20px;
}

.product-image img {
  height: auto;
  border-radius: 5px;
}

.product-info {
  flex-basis: 60%;
  max-width: 60%;
  align-self: flex-start;
}

.product-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.product-meta {
  margin-bottom: 10px;
}

.product-meta span {
  display: inline-block;
  margin-right: 10px;
  font-size: 0.9rem;
  color: #999;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #008cba;
}
</style>
