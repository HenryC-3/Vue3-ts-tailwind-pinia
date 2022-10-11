import type { App } from 'vue'
import { createApp } from 'vue'
import type { GetTemporaryComponent } from '../types'

/**
 *
 * @param component 组件
 * @param props 组件参数
 * @param removeAfter 移除组件所在 DOM 元素的等待时间
 */
export const getTemporaryComponent: GetTemporaryComponent = (component, props, removeAfter) => {
  /**
   * 组件所挂载的 DOM 节点
   */
  let mountNode: HTMLElement | null = null
  let status = false
  let appInstance: App | null = null
  // init props
  props.remove = remove
  const getApp = () => createApp(component, props)
  /**
   * 移除组件所在的 DOM 节点
   */
  function remove() {
    if (mountNode && appInstance) {
      appInstance.unmount()
      document.body.removeChild(mountNode)
      appInstance = null
      mountNode = null
    }
    status = false
  }

  /**
   * 添加组件所在的 DOM 节点到当前页面，多次调用仅添加一次
   */
  function add() {
    const isNotSingle = !(appInstance && mountNode)
    if (!isNotSingle) {
      console.warn('already mounted a component to the temporary app')
    }
    if (isNotSingle) {
      appInstance = getApp()
      mountNode = document.createElement('div')
      document.body.appendChild(mountNode)
      appInstance.mount(mountNode)
      status = true
    }
  }

  if (removeAfter) {
    setTimeout(() => {
      remove()
    }, removeAfter)
  }

  /**
   * 添加或移除
   */
  function toggle() {
    status = !status
    status ? add() : remove()
  }

  return {
    remove,
    add,
    toggle,
    mountNode
  }
}
