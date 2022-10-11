import { getRefDOM } from '../utils/getRefDOM'
import { onMounted, onUnmounted, ref, type Ref } from 'vue'

interface ComponentRef {
  key: string
  el: Ref<HTMLElement | null>
}

type ElementRefList = Array<ComponentRef | Ref<HTMLElement | null>>

export const useClickOutside = (elementRefList: ElementRefList) => {
  const result = ref(false)
  const handler = (e: MouseEvent) => {
    const targets = elementRefList.map((elementRef) => {
      if ('el' in elementRef) {
        const target = getRefDOM(elementRef.el, elementRef.key)
        return target
      } else {
        const target = getRefDOM(elementRef)
        return target
      }
    })

    // targetList 中的任意元素包含点击的元素 ，即视为点击到了内部
    const isInside = targets.some((target) => {
      if (target) return target.contains(e.target as HTMLElement)
    })
    if (isInside) {
      result.value = false
    } else {
      result.value = true
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return result
}
