<script setup lang="ts">
import router from '../router'
import { ref } from 'vue'
import ResponsiveCard from '../basic-components/ResponsiveCard.vue'
import LoadMoreButton from '../components/LoadMoreButton.vue'

const goToArticle = () => {
  router.push('/article')
}

const cards = ref([1, 2, 3, 4, 5, 6, 7, 8])

const loadMore = () => {
  // TODO: 🍍
  cards.value.push(1)
}
</script>
<template>
  <!-- <div class="w-[100%] px-[16px] flex flex-row justify-center"> -->
  <div class="flex w-[100%] flex-col justify-center gap-2 px-[16px] sm:max-w-[654px] sm:gap-4">
    <!-- user profile -->
    <ResponsiveCard
      :is-responsive="false"
      class="mx-[-16px] rounded-none shadow-none sm:mx-0 sm:rounded sm:shadow-md">
      <template #image>
        <img
          src="../assets/avatar_default.png"
          alt="avatar"
          class="w-[72px] self-center rounded-full border border-green-500 shadow-md" />
      </template>
      <template #title>专栏名称</template>
      <template #description
        >Aliqua occaecat commodo in consectetur nulla et sunt aliquip enim. Enim duis pariatur
        deserunt nisi do aliqua adipisicing consequat do adipisicing minim ipsum deserunt. Excepteur
        in proident tempor laboris minim.</template
      >
    </ResponsiveCard>
    <!-- article list -->
    <ResponsiveCard
      :is-responsive="false"
      v-for="(card, index) in cards"
      :key="index"
      @click="goToArticle">
      <template #image>
        <img src="../assets/thumbnail.png" alt="thumbnail" class="w-[160px] object-cover" />
      </template>
      <template #title>文章名称</template>
      <template #description
        >Aliqua occaecat commodo in consectetur nulla et sunt aliquip enim. Enim duis pariatur
        deserunt nisi do aliqua adipisicing consequat do adipisicing minim ipsum deserunt. Excepteur
        in proident tempor laboris minim.</template
      >
      <template #footer>2021-1-1</template>
    </ResponsiveCard>
  </div>
  <!-- </div> -->
  <LoadMoreButton @click="loadMore"></LoadMoreButton>
</template>
