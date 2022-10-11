<template>
  <icon-source :width="props.width ? props.width : 40"></icon-source>
</template>

<script setup lang="ts">
import { Icon as IconSource } from '@iconify/vue'
import type { IconifyDimenisons } from '@iconify/types'

const props = defineProps<{
  width?: IconifyDimenisons['width']
}>()
</script>
