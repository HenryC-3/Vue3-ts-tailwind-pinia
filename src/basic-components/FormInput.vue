<template>
  <div class="flex w-[100%] flex-col gap-3">
    <div class="flex items-end justify-between">
      <label><slot name="title" class="text-base font-normal leading-6"></slot></label>
      <!-- note -->
      <span class="text-xs font-normal leading-4" :class="noteStyle">{{ noteContent }}</span>
    </div>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="onFocus"
      class="h-[40px] rounded border border-gray-200 p-2 focus:outline-blue-500" />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import type { ValidationInfo, Validator } from '../types'
import { computed, watch, ref, type Ref } from 'vue'

const props = defineProps<{
  note?: string
  validator?: Validator
  modelValue: string
}>()

const input = computed(() => props.modelValue)

// 初始值
const validationResult: Ref<ValidationInfo> = ref({ result: true })

const updateValidationResult = (): ValidationInfo => {
  if (props.validator) {
    const result = props.validator(input.value)
    validationResult.value = result
    return result
  }
  // 无验证
  return { result: true }
}

// 聚焦到输入框后，立刻验证一次，之后每次输入均会触发验证
const onFocus = () => {
  updateValidationResult()
  watch(input, updateValidationResult)
}

// 根据验证结果修改 note 样式
const noteStyle = computed(() => {
  if (validationResult.value) {
    const status = validationResult.value?.result
    return status ? 'text-green-500' : 'text-red-500'
  }
  return ''
})

// 验证错误，显示错误 note，否则显示默认 note
const noteContent = computed(() => {
  if (validationResult.value?.result === false && validationResult.value?.errMsg) {
    return validationResult.value.errMsg
  }
  return props.note
})
</script>
