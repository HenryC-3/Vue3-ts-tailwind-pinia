<template>
  <button
    class="flex flex-row items-center justify-center gap-2 rounded p-2 text-base font-normal shadow-md"
    :class="[sizeClass, solidClass]">
    <slot>按钮</slot>
  </button>
</template>

<script setup lang="ts">
import type { BasicButtonProps } from '../types'
import { ref } from 'vue'

const props = defineProps<BasicButtonProps>()
const sizeClass = ref('')
const color = ref('')
const solidClass = ref('')

switch (props.size) {
  case 'lg': {
    sizeClass.value = 'w-[144px] h-[40px]'
    break
  }
  default: {
    sizeClass.value = 'w-[72px] h-[36px]'
  }
}

switch (props.color) {
  case 'success': {
    color.value = 'green'
    break
  }
  case 'danger': {
    color.value = 'red'
    break
  }
  default: {
    color.value = 'blue'
  }
}

if (props.isOutline) {
  solidClass.value = `box-border border border-${color.value}-500 text-${color.value}-500`
} else {
  solidClass.value = `bg-${color.value}-500 text-white`
}
</script>

<style scoped></style>
