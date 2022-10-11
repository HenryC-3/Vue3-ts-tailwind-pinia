<template>
  <div
    class="flex flex-row justify-between gap-4 rounded bg-white py-[8px] px-[16px] shadow-md"
    :class="isResponsive ? 'sm:h-[232px] sm:w-[214px] sm:flex-col sm:gap-2' : ''">
    <!-- image -->
    <slot name="image"> </slot>
    <!-- content -->
    <div
      class="flex w-[67px] flex-1 flex-col items-start gap-1"
      :class="isResponsive ? 'sm:w-[100%] sm:items-center' : ''">
      <!-- title -->
      <h4 class="text-base font-semibold"><slot name="title"></slot></h4>
      <!-- description -->

      <span class="text-sm font-light text-gray-500 line-clamp-3"
        ><slot name="description"></slot
      ></span>
      <!-- footer -->
      <span class="text-xs font-normal text-gray-400" :class="isResponsive ? 'sm:hidden' : ''"
        ><slot name="footer"></slot
      ></span>
    </div>
    <!-- button -->
    <slot name="button"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isResponsive: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<style scoped></style>
