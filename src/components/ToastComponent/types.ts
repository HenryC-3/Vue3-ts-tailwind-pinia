export interface ToastProps {
  msg?: string
  color?: 'success' | 'danger'
  remove?: () => void
  hideAfter?: number
}
