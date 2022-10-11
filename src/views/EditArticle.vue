<script setup lang="ts">
import { reactive, ref } from 'vue'
import BasicButton from '../basic-components/BasicButton.vue'
import ModalComponent from '../components/ModalComponent/index.vue'
import router from '../router'
import { watch } from 'vue'
import { useClickOutside } from '../hooks/useClickOutside'
import { useToast } from '../components/ToastComponent'
import UploaderComponent from '../components/UploaderComponent.vue'
import Editor from '@tinymce/tinymce-vue'
import GeneralContainer from '../basic-components/GeneralContainer.vue'

/** 用户状态 */
const isUserLogin = ref(true)

/** 标题及文档内容 */
const { VITE_TINYMCE_EDITOR_API } = import.meta.env // https://www.tiny.cloud/my-account/dashboard
const article = reactive({
  title: 'Edit title',
  content:
    'Sit ad non consectetur nisi nisi sunt irure aute cupidatat reprehenderit minim pariatur voluptate nisi. Officia Lorem ipsum nulla sit id eu enim. Deserunt nulla et ea pariatur deserunt eiusmod.'
})

/** 控制 Modal 的开启关闭状态 */
const modalStatus = ref(false)
const toggleModal = () => {
  modalStatus.value = !modalStatus.value
}

/** 根据点击位置决定是否关闭 modal */
const modalRef = ref(null)
const triggerButtonRef = ref(null)
const isClickOutside = useClickOutside([{ el: modalRef, key: 'modalRef' }, triggerButtonRef])
watch(isClickOutside, () => {
  const onToggle = modalStatus.value && isClickOutside.value
  if (onToggle) {
    toggleModal()
  }
})

/** 根据 modal 选项执行操作 */
const onGetResult = (res: boolean) => {
  if (res) {
    // TODO: 撤销逻辑
    router.push('/article')
  }
}

/** 撤销按钮 */
const cancelEdit = () => {
  toggleModal()
}
/** 发布按钮 */
const publishUpdatedArticle = () => {
  // TODO: 发布逻辑
  router.push('/article')
  const { add } = useToast({ msg: '发布成功' })
  add()
}
</script>
<template>
  <GeneralContainer class="gap-1 px-0 sm:w-[654px] sm:gap-2 sm:px-[16px]">
    <UploaderComponent :validTypes="['jpg', 'png']" :maxSize="1024"></UploaderComponent>
    <!-- article title -->
    <input
      v-model="article.title"
      type="text"
      class="border border-gray-200 bg-white p-2 py-1 px-4 text-3xl font-semibold focus:outline-blue-500 sm:rounded sm:shadow-md" />
    <!-- TODOv2: remove API key -->
    <!-- article content-->
    <div class="sm:rounded sm:shadow-md">
      <editor
        v-model="article.content"
        :api-key="VITE_TINYMCE_EDITOR_API"
        :init="{
          plugins: 'lists link table autoresize',
          branding: false,
          min_height: 480,
          max_height: 1080
        }" />
    </div>
    <!-- button group -->
    <div v-if="isUserLogin" class="flex justify-end gap-4 bg-white p-4 sm:rounded sm:shadow-md">
      <!-- modal -->
      <ModalComponent :status="modalStatus" @result="onGetResult" ref="modalRef">
        <template #title>确定撤销已经更改的内容吗？</template>
        <template #description>撤销后的内容无法恢复</template>
        <template #confirmButton>确认</template>
        <template #cancelButton>取消</template>
      </ModalComponent>
      <!-- trigger modal -->
      <div ref="triggerButtonRef">
        <BasicButton @click="cancelEdit" color="danger">撤销</BasicButton>
      </div>
      <BasicButton @click="publishUpdatedArticle" color="success">发布</BasicButton>
    </div>
  </GeneralContainer>
</template>
