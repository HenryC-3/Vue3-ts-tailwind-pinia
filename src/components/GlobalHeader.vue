<template>
  <div class="flex w-[100%] flex-row items-center justify-between bg-white px-8 py-2 shadow">
    <img
      src="../assets/logo_transparent.png"
      alt="logo"
      class="w-[87px] cursor-pointer"
      @click="goHome" />
    <!-- login dropdown -->
    <div v-if="isUserLogin" ref="dropDownElement">
      <!-- dropdown button -->
      <BasicButton size="lg" @click="toggleDropDownMenu">
        <span>User Name</span>
        <IconComponent :width="16" :icon="iconName"></IconComponent>
      </BasicButton>
      <!--dropdown option -->
      <ul v-if="isDropdownMenuOpen" class="absolute top-[86.5px] rounded bg-white shadow-md">
        <DropDownItem><RouterLink to="/edit">New Article</RouterLink></DropDownItem>
        <DropDownItem>New Series</DropDownItem>
        <DropDownItem>Profile</DropDownItem>
        <DropDownItem :is-disable="true">Logout</DropDownItem>
      </ul>
    </div>
    <!-- logout button group-->
    <div v-else class="flex flex-row gap-3">
      <BasicButton>登录</BasicButton>
      <BasicButton>注册</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../router'
import { computed, ref, watch } from 'vue'
import BasicButton from '../basic-components/BasicButton.vue'
import IconComponent from '../basic-components/IconComponent.vue'
import DropDownItem from '../basic-components/DropDownItem.vue'
import { useClickOutside } from '../hooks/useClickOutside'

const isUserLogin = ref(true)

/**
 * icon
 */
const goHome = () => {
  router.push('/')
}

/**
 * dropdown menu
 */
const isDropdownMenuOpen = ref(false)
const toggleDropDownMenu = () => {
  isDropdownMenuOpen.value = !isDropdownMenuOpen.value
}
const iconName = computed(() => {
  return isDropdownMenuOpen.value ? 'akar-icons:chevron-up' : 'akar-icons:chevron-down'
})

const dropDownElement = ref<HTMLElement | null>(null)
const isOutside = useClickOutside([dropDownElement])
watch(isOutside, () => {
  if (isDropdownMenuOpen.value && isOutside.value) {
    toggleDropDownMenu()
  }
})
</script>
