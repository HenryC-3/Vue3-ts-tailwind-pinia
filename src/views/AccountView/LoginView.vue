<template>
  <form class="flex flex-col gap-4">
    <FormInput
      v-for="(formInput, index) in formInputs"
      :key="index"
      v-model="formInput.text"
      :type="formInput.type"
      :validator="formInput.validator"
      :placeholder="formInput.placeholder"
      :note="formInput.note"
      autocomplete="false"
      ><template #title>{{ formInput.label }}</template></FormInput
    >
    <BasicButton color="primary" class="self-end" @click.prevent="onclick">登录</BasicButton>
  </form>
</template>

<script setup lang="ts">
import FormInput from '../../basic-components/FormInput.vue'
import BasicButton from '../../basic-components/BasicButton.vue'
import { nameValidator, passwordValidator } from '../../utils/validators'
import { reactive } from 'vue'
import type { FormInput as FormInputObj } from '../../types'
import { useToast } from '../../components/ToastComponent'
import router from '../../router'

const formInputs: FormInputObj[] = reactive([
  {
    text: '',
    type: 'text',
    label: '用户名',
    placeholder: '请输入用户名',
    note: '',
    validator: nameValidator
  },
  {
    text: '',
    type: 'password',
    label: '密码',
    placeholder: '请输入密码',
    note: '',
    validator: passwordValidator
  }
])

const onclick = () => {
  const formValidationResult = formInputs.every((formInput) => {
    if (formInput.validator) {
      const resultInfo = formInput.validator(formInput.text)
      return resultInfo.result
    }
    return true
  })
  if (formValidationResult) {
    // TODOv2: 撰写登录跳转逻辑
    // 跳转至首页
    router.push('/')
  } else {
    const { add } = useToast({ msg: '用户名或密码错误', color: 'danger' })
    add()
  }
}
</script>
