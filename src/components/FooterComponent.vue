<template>
  <div class="footer">
    <span class="footer-value"> Create by: Grzegorz Ważny </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DeviceResolutionService from '@/services/DeviceResolutionService'

export default defineComponent({
  beforeCreate() {
    DeviceResolutionService.onResize()
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50px;
  outline: 1px #777;
  background: #ccc;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  .footer-value {
    padding: 10px;
  }
}
</style>
