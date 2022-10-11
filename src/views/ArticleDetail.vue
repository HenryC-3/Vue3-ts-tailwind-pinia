<script setup lang="ts">
import { ref } from 'vue'
import GeneralContainer from '../basic-components/GeneralContainer.vue'
import ResponsiveCard from '../basic-components/ResponsiveCard.vue'
import BasicButton from '../basic-components/BasicButton.vue'
import router from '../router'
const isUserLogin = ref(true)
const isAuthor = ref(true)
// 更新文章按钮
const updateArticle = () => {
  // TODO 更新文章逻辑
  router.push('/edit')
}

// 删除文章按钮
const deleteArticle = () => {
  // TODO 删除文章逻辑
}
</script>
<template>
  <GeneralContainer class="gap-1 px-0 sm:w-[654px] sm:gap-2 sm:px-[16px]">
    <!-- thumbnail-->
    <img src="../assets/thumbnail.png" alt="thumbnail" class="object-cover sm:h-[360px]" />
    <h2 class="bg-white py-1 px-4 text-3xl font-semibold sm:rounded sm:shadow-md">文章名称</h2>
    <!-- author profile -->
    <ResponsiveCard
      :is-responsive="false"
      class="rounded-none shadow-none sm:mx-0 sm:rounded sm:shadow-md">
      <template #image>
        <img
          src="../assets/avatar_default.png"
          alt="avatar"
          class="w-[72px] self-center rounded-full border border-green-500 shadow-md" />
      </template>
      <template #title>作者名称</template>
      <template #description
        >Aliqua occaecat commodo in consectetur nulla et sunt aliquip enim. Enim duis pariatur
        deserunt nisi do aliqua adipisicing consequat do adipisicing minim ipsum deserunt. Excepteur
        in proident tempor laboris minim.</template
      >
    </ResponsiveCard>
    <!-- article -->
    <p class="bg-white p-4 sm:rounded sm:shadow-md">
      Nisi consequat quis ex tempor cillum pariatur pariatur sint est fugiat. Ex duis mollit irure
      et ullamco mollit enim quis officia et amet nisi. In excepteur sint irure dolore eiusmod
      labore duis laboris nostrud esse. Fugiat Lorem aute culpa veniam nisi elit anim. Minim aliquip
      tempor ad nulla id sit. Deserunt in sit qui dolor deserunt nostrud cillum. Eiusmod
      exercitation nostrud excepteur commodo ad aliquip in incididunt quis cupidatat nisi. Deserunt
      pariatur ut voluptate consectetur duis dolor ex anim non elit aliquip proident duis minim.
      Laborum consectetur voluptate proident eu ex do nostrud ea nulla irure cillum est non.
      Proident incididunt nulla consectetur ad esse nisi aliquip enim ullamco tempor. Laborum eu
      dolor velit est cillum occaecat proident laborum ea aute. Fugiat ad eu eu incididunt. Deserunt
      pariatur cupidatat reprehenderit tempor id veniam veniam nulla deserunt cillum ea
      reprehenderit dolore sit. Fugiat sint ullamco do anim aliquip. Enim enim aliquip dolor
      adipisicing nulla cupidatat ut veniam mollit ipsum ea. Laboris magna sit laboris est do.
    </p>
    <!-- button group -->
    <div
      v-if="isUserLogin && isAuthor"
      class="flex justify-end gap-4 bg-white p-4 sm:rounded sm:shadow-md">
      <BasicButton @click="updateArticle">编辑</BasicButton>
      <BasicButton color="danger" @click="deleteArticle">删除</BasicButton>
    </div>
  </GeneralContainer>
</template>
