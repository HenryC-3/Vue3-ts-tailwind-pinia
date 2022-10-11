<template>
  <li
    @click="$emit('dropDownItemClicked')"
    class="flex h-[36px] w-[144px] list-none items-center justify-center"
    :class="
      isDisable ? 'cursor-not-allowed text-gray-300 ' : 'hover:bg-blue-200 hover:text-blue-500 '
    ">
    <slot>测试</slot>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  isDisable?: boolean
}>()
</script>

<style scoped></style>
