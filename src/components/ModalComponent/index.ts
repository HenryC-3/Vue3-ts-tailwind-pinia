import type { UseTemporaryComponent } from '../../types'
import { getTemporaryComponent } from '../../utils/getTemporaryComponent'
import type { ModalProps } from './types'
import Modal from './index.vue'

export const useModal: UseTemporaryComponent<ModalProps> = (props) => {
  const actions = getTemporaryComponent(Modal, props)
  return actions
}
