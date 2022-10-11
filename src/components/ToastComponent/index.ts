import type { UseTemporaryComponent } from '../../types'
import { getTemporaryComponent } from '../../utils/getTemporaryComponent'
import type { ToastProps } from './types'
import Toast from './index.vue'

export const useToast: UseTemporaryComponent<ToastProps> = (props) => {
  if (!props.hideAfter) {
    props.hideAfter = 3000
  }
  const actions = getTemporaryComponent(Toast, props)
  return actions
}
