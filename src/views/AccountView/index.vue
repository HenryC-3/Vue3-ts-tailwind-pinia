<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <GeneralContainer class="items-center">
    <!-- tab -->
    <div class="flex w-[313px] flex-col gap-4 rounded bg-white p-4 shadow-md">
      <!-- tab names -->
      <div class="flex gap-2 py-2 text-xl font-semibold">
        <Router-Link
          v-for="(tab, index) in tabs"
          :key="index"
          :to="tab.path"
          :class="$route.path === tab.path ? 'border-b-[4px] border-b-blue-500' : ''"
          >{{ tab.name }}</Router-Link
        >
      </div>
      <!-- tab content -->
      <RouterView></RouterView>
    </div>
  </GeneralContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeneralContainer from '../../basic-components/GeneralContainer.vue'
const tabs = ref([
  { name: '登录', path: '/account/login' },
  { name: '注册', path: '/account/signin' }
])
</script>
