import { CLOSE } from '~/app-modules/ui/Modals/composables/useUiModal'

export interface UiModalButton {
  text: string
  onClick: typeof CLOSE | ((...args: any) => void)
  theme?: string
}

export interface ModalData {
  title?: string
  cross?: boolean
  overlay?: boolean
  persistent?: boolean
  transitionOverlay?: string
  transitionModal?: string

  component?: any // VueConstructor | AsyncComponent<any, any, any, any>
  componentBinds?: Record<string, any>
  heading?: string
  content?: string
  buttons?: Array<UiModalButton>

  onDismiss?: () => void
}

export type UiModal = ModalData & {
  id: Symbol
  dismiss: () => void
}

export interface Modals {
  modals: Array<UiModal>
}