<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
</script>

<template>
  <div class="min-w-screen flex min-h-screen flex-col items-center gap-6 bg-gray-200">
    <GlobalHeader></GlobalHeader>
    <RouterView />
    <GlobalFooter class="shrink-0"></GlobalFooter>
  </div>
</template>
