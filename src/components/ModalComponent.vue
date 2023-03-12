<template>
  <div class="modal">
    <div class="modal-header">
      <span class="close-icon" @click="closeModal()">X</span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface MenuItem {
  name: string
  path: string
}

export default defineComponent({
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/globals.scss';

.modal {
  position: absolute;
  background: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 30px;
  .modal-header {
    display: flex;
    justify-content: flex-end;
    padding: 10px;

    .close-icon {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: gray;
      cursor: pointer;
    }
  }
}
</style>
