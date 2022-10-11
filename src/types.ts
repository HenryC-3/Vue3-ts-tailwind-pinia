import type { Component } from 'vue'

export type ButtonColor = 'primary' | 'success' | 'danger'
export type ButtonSize = 'md' | 'lg'

export interface BasicButtonProps {
  isOutline?: boolean
  color?: ButtonColor
  size?: ButtonSize
}

export type ValidationInfo = { result: boolean; errMsg?: string }
export type Validator = (input: string) => ValidationInfo

export type FormInput = {
  text: string
  type?: string
  placeholder?: string
  label?: string
  note?: string
  validator?: Validator
}

export interface ProgrammaticProps {
  remove?: () => void
  add?: () => void
  toggle?: () => void
}

export type GetTemporaryComponent = (
  component: Component,
  props: Record<string, any> & ProgrammaticProps,
  afterDelay?: AfterDelay
) => Required<ProgrammaticProps> & { mountNode: HTMLElement | null }

type AfterDelay = number

export type UseTemporaryComponent<T> = (
  props: T,
  afterDelay?: AfterDelay
) => ReturnType<GetTemporaryComponent>
