<template>
  <div class="modal">
    <div class="modal-header">
      <button class="close-button" @click="closeModal()">X</button>
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
  }
}
.close-button {
  display: inline-block;
  padding: 4px 8px;
  background-color: #cccccc;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333333;
  }
}
</style>
