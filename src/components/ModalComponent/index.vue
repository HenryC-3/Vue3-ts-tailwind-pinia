<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AnimationFade from '../AnimationFade.vue'
import BasicButton from '../../basic-components/BasicButton.vue'
import type { ModalProps } from './types'
import { ref } from 'vue'

defineProps<ModalProps>()

const emit = defineEmits<{ (e: 'result', result: boolean): void }>()

// modal 按钮
const onconfirm = () => {
  emit('result', true)
}
const oncancel = () => {
  emit('result', false)
}

const modalRef = ref(null)
defineExpose({ modalRef })
</script>

<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<template>
  <AnimationFade :remove="remove" :status="status" v-slot="{ hide }">
    <!-- cast -->
    <div class="fixed top-0 bottom-0 left-0 right-0 z-[3000] bg-gray-500 opacity-50"></div>
    <!-- modal -->
    <div
      ref="modalRef"
      v-bind="$attrs"
      class="fixed top-[50%] right-[50%] z-[3001] flex w-[324px] translate-x-[50%] translate-y-[-50%] flex-col items-start justify-between gap-2 rounded bg-white py-[8px] px-[16px] shadow-md">
      <!-- content -->
      <div class="flex w-[100%] flex-1 flex-col items-start gap-1">
        <!-- title -->
        <h4 class="text-lg font-semibold"><slot name="title"></slot></h4>
        <!-- description -->
        <span class="text-sm font-light text-gray-500 line-clamp-3">
          <slot name="description"></slot>
        </span>
      </div>
      <!-- option -->
      <div class="flex w-[100%] justify-end gap-2">
        <div @click="hide">
          <BasicButton color="danger" @click="onconfirm"
            ><slot name="confirmButton">confirm</slot></BasicButton
          >
        </div>
        <div @click="hide">
          <BasicButton @click="oncancel"><slot name="cancelButton">cancel</slot></BasicButton>
        </div>
      </div>
    </div>
  </AnimationFade>
</template>
