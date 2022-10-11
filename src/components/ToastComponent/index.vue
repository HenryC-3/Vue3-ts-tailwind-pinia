<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import type { ToastProps } from './types'
import IconComponent from '../../basic-components/IconComponent.vue'
import AnimationFade from '../../components/AnimationFade.vue'

const props = defineProps<ToastProps>()

const iconSuccess = {
  name: 'ep:success-filled',
  style: 'text-green-500'
}

const iconDanger = {
  name: 'codicon:warning',
  style: 'text-red-500'
}

const iconName = ref(iconSuccess.name)
const iconStyle = ref(iconSuccess.style)

switch (props.color) {
  case 'danger': {
    iconName.value = iconDanger.name
    iconStyle.value = iconDanger.style
  }
}
</script>

<template>
  <AnimationFade :status="true" :remove="remove" :hideAfter="hideAfter" v-slot="{ hide }">
    <div
      class="fixed top-[15%] right-[1%] flex h-[64px] w-[396px] items-center justify-between gap-4 rounded-[8px] bg-white px-4 py-7 shadow-md">
      <IconComponent :icon="iconName" :class="iconStyle" :width="28"></IconComponent>
      <span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg"
        ><slot>{{ msg }}</slot></span
      >
      <IconComponent
        icon="carbon:close"
        :width="28"
        class="text-gray-500"
        @click="hide"></IconComponent>
    </div>
  </AnimationFade>
</template>
