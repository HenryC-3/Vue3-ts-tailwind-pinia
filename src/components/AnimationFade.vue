<template>
  <transition name="fade" @after-leave="remove">
    <div v-show="contentStatus"><slot :hide="hide"></slot></div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
const props = defineProps<{ remove?: () => void; status: boolean; hideAfter?: number }>()
const emit = defineEmits(['hide'])
const contentStatus = ref(false)
nextTick(() => {
  contentStatus.value = props.status

  // 自动隐藏逻辑
  if (props.hideAfter) {
    setTimeout(() => {
      hide()
    }, props.hideAfter)
  }
})
watch(
  () => props.status,
  () => {
    contentStatus.value = props.status
  }
)
const hide = () => {
  // 调用移除函数并发送事件
  contentStatus.value = false
  emit('hide')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
</style>
