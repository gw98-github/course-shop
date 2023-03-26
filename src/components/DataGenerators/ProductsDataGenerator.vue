<template>
  <button @click="generateData()">Generate Data</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FirebaseService from '@/services/FirebaseService'

export default defineComponent({
  methods: {
    async generateData() {
      let id = 'id' + Math.random().toString(16).slice(2)
      FirebaseService.create('products/' + id, this.generateProduct(id))
    },
    generateProduct(id: string) {
      const minPrice = 5
      const maxPrice = 250
      const price = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)

      const name = this.makeName(10)

      const photoUrl = '/api/photos/' + this.makeName(20) + '.png'

      const categories = ['telewizory', 'agd małe', 'jedzenie', 'rowery', 'usługi', 'smartfony']
      const categoryID = Math.floor(Math.random() * categories.length)
      const category = categories[categoryID]

      return {
        id,
        name,
        price,
        category,
        photoUrl
      }
    },
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    makeName(length: number) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      let counter = 0
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
      }
      return result
    }
  }
})
</script>

<style lang="scss" scoped></style>
