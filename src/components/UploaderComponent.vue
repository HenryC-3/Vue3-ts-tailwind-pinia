<template>
  <!-- 创建文章初始状态 -->
  <label
    v-if="uploadStatus === 'init' || uploadStatus === 'uploading'"
    for="image-uploader"
    class="box-border flex cursor-pointer flex-col items-center justify-center gap-4 border-[5px] border-dashed border-blue-400 bg-blue-200 p-[32px] hover:bg-blue-100 sm:h-[360px] sm:rounded-lg">
    <IconComponent
      :icon="uploader.icon"
      :width="100"
      :class="{
        'text-blue-500': uploadStatus === 'uploading',
        'text-gray-500': uploadStatus === 'init'
      }"></IconComponent>
    <div class="w-[187px] text-center text-xl text-gray-500">
      {{ uploader.info }}
    </div>
  </label>
  <!-- 上传文件后 -->
  <label
    v-if="uploadStatus === 'uploaded'"
    for="image-uploader"
    class="group relative block cursor-pointer">
    <div
      class="absolute bottom-[50%] right-[50%] w-[187px] translate-y-1/2 translate-x-1/2 text-center text-xl opacity-0 group-hover:opacity-100">
      <span>点击上传文件，{{ initInfo }}</span>
    </div>
    <img :src="src" alt="thumbnail" class="w-[100%] object-cover group-hover:opacity-50" />
  </label>

  <input type="file" id="image-uploader" hidden ref="uploadRef" @change="onchange" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useToast } from './ToastComponent'

const props = defineProps<{
  validTypes: string[] // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
  maxSize: number
  imageSrc?: string
}>()

const uploadRef = ref(null)
const src = ref('')
const uploadStatus = ref<'init' | 'uploading' | 'uploaded'>('init')
const imageTypes = computed(() => props.validTypes.map((type) => 'image/' + type))
const initInfo = computed(
  () => `支持 ${props.maxSize} kb 以内，格式为 ${props.validTypes.join('、')} 的文件`
)
const uploader = computed(() => {
  if (uploadStatus.value === 'uploading') {
    return {
      icon: 'line-md:loading-twotone-loop',
      info: '上传中'
    }
  }
  return {
    icon: 'bi:cloud-upload',
    info: '点击上传文件，' + initInfo.value
  }
})
if (props.imageSrc) {
  src.value = ref(props.imageSrc).value
}

const onchange = () => {
  // 检查文件大小、类型
  if (uploadRef.value) {
    const file = ((uploadRef.value as HTMLInputElement).files as unknown as File[])[0]
    const result = validation(file)
    if (!result) {
      const { add } = useToast({ color: 'danger', msg: '仅' + initInfo.value })
      add()
    } else {
      // TODO 上传文件
      uploadStatus.value = 'uploading'

      // 模拟文件上传成功后，显示图片
      setTimeout(() => {
        // TODO 获取到上传到后端的链接后，显示图片
        src.value = URL.createObjectURL(file)
        uploadStatus.value = 'uploaded'
      }, 2000)
    }
  }
}

function validation(file: File) {
  return file.size < props.maxSize * 1000 && imageTypes.value.includes(file.type)
}
</script>
