import type { Ref } from 'vue'

/**
 * demo 为对象，demo.value 必须包含名为 test 的 key, 对应值类型为 HTMLElement 或 null
 * ```ts
 * const demo: ComponentRef<'test'> = ref({ test: null })
 * ```
 */
type ComponentRef<T extends string> = Ref<Record<string, any> & Record<T, HTMLElement | null>>

/**
 * @description 获取 template refs (包含组件 refs) 中的 DOM 元素
 * @param ref 使用 template refs 获取到的组件 ref
 * @param componentRefKey 用于访问组件 ref 的键 https://vuejs.org/guide/essentials/template-refs.html#ref-on-component
 */

export function getRefDOM<T extends string>(
  ref: Ref<HTMLElement> | ComponentRef<T> | Ref<null>,
  componentRefKey?: T
): HTMLElement | null | undefined {
  if (ref.value) {
    if (ref.value instanceof HTMLElement) {
      return ref.value
    } else {
      if (componentRefKey && componentRefKey in ref.value) {
        const result = ref.value[componentRefKey]
        return result
      }
    }
  }
}
