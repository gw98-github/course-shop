<template>
  <!-- <div>{{ product }}</div> -->
  <div class="product">
    <img
      class="product__image"
      src="https://cdn.pixabay.com/photo/2023/03/17/20/42/camera-7859402_960_720.jpg"
      alt="Product Image"
    />
    <div class="product__details">
      <h1 class="product__name">{{ product.name }}</h1>
      <p class="product__id">{{ product.id }}</p>
      <p class="product__category">Kategoria: {{ product.category }}</p>
      <p class="product__price">{{ product.price }} zł</p>
      <button class="product__add-to-cart btn">Dodaj do koszyka</button>
    </div>
  </div>
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
      product: {} as Product
    }
  },
  async created() {
    const id = this.$route.params.id
    const item = await (await FirebaseService.get(`/products/${id}`)).val()
    this.product = item as Product
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

$product-background-color: #f5f5f5;
$product-text-color: #333;
$product-image-width-mobile: 100%;
$product-image-width-desktop: 40%;
$btn-background-color: $button-primary-color;
$btn-text-color: white;
$btn-border-radius: 0.25rem;
$btn-transition: background-color 0.2s ease-in-out;

.btn {
  display: inline-block;
  background-color: $btn-background-color;
  color: $btn-text-color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: $btn-border-radius;
  font-size: 1rem;
  cursor: pointer;
  transition: $btn-transition;

  &:hover {
    background-color: darken($btn-background-color, 10%);
  }
}

.product {
  display: flex;
  flex-direction: column;
  background-color: $product-background-color;
  padding: 1rem;
  border-radius: 0.5rem;

  &__image {
    width: $product-image-width-mobile;
    margin-bottom: 1rem;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > * {
      margin-bottom: 0.5rem;
    }

    &__name {
      font-size: 1.5rem;
      font-weight: bold;
      color: $product-text-color;
    }

    &__id,
    &__category,
    &__price {
      font-size: 1rem;
      color: $product-text-color;
    }

    &__price {
      font-weight: bold;
    }

    &__add-to-cart {
      display: inline-block;
      background-color: $button-primary-color;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #005d80;
      }
    }
  }
}

@media (min-width: $tablet) {
  .product {
    flex-direction: row;
    align-items: center;

    &__image {
      width: $product-image-width-desktop;
      margin-bottom: 0;
    }

    &__details {
      margin-left: 1rem;
    }
  }
}
</style>
