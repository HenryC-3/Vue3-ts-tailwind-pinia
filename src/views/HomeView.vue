<script setup lang="ts">
import router from '../router'
import { ref } from 'vue'
import BasicButton from '../basic-components/BasicButton.vue'
import ResponsiveCard from '../basic-components/ResponsiveCard.vue'
import { useViewPortWidth } from '../hooks/useViewPortWidth'
import LoadMoreButton from '../components/LoadMoreButton.vue'

// TODO: 🍍
const cards = ref([1, 2, 3, 4, 5, 6, 7, 8])

// 当页面视口宽度小于 640 px 时，点击卡片任意区域，即可前往对应专栏
const goToColumn = () => {
  const viewPortWidth = useViewPortWidth()
  if (viewPortWidth <= 640) router.push('/column')
}

const loadMore = () => {
  // TODO: 🍍
  cards.value.push(1)
}
</script>
<template>
  <!-- 1040px = ResponsiveCard width 248 * 4 + gap * 3 大屏幕下每行最多容纳 4 张 card -->
  <div
    class="flex w-[100%] flex-col justify-center gap-2 px-4 sm:max-w-[1040px] sm:flex-row sm:flex-wrap sm:gap-6">
    <ResponsiveCard v-for="(card, index) in cards" :key="index" @click="goToColumn">
      <template #image>
        <img
          src="../assets/avatar_default.png"
          alt="avatar"
          class="w-[56px] self-center rounded-full border border-green-500 shadow-md" />
      </template>
      <template #title>专栏名称</template>
      <template #description
        >Aliqua occaecat commodo in consectetur nulla et sunt aliquip enim. Enim duis pariatur
        deserunt nisi do aliqua adipisicing consequat do adipisicing minim ipsum deserunt. Excepteur
        in proident tempor laboris minim.</template
      >
      <template #button>
        <BasicButton
          size="lg"
          :is-outline="true"
          color="success"
          class="hidden self-center sm:block"
          ><RouterLink to="/column">进入专栏</RouterLink></BasicButton
        ></template
      >
    </ResponsiveCard>
  </div>
  <LoadMoreButton @click="loadMore"></LoadMoreButton>
</template>
