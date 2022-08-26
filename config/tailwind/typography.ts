// @ts-expect-error
import { pxToRemPair } from '@captaincss/captaincss/helpers'

export const fontFamily = {
  body: ['WorkSans-Regular', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
}

export const fontSize = {
  // Create map of fonts with px keys and rem values, e.g. { 16: 1rem, 32: 2rem }

  // @todo Set up the font sizes for your project, then remove this comment
  ...pxToRemPair(90),
  ...pxToRemPair(80),
  ...pxToRemPair(60),
  ...pxToRemPair(50),
  ...pxToRemPair(44),
  ...pxToRemPair(40),
  ...pxToRemPair(36),
  ...pxToRemPair(30),
  ...pxToRemPair(28),
  ...pxToRemPair(24),
  ...pxToRemPair(25),
  ...pxToRemPair(20),
  ...pxToRemPair(18),
  ...pxToRemPair(16),
  ...pxToRemPair(14),
  ...pxToRemPair(12),
  ...pxToRemPair(10),
  ...pxToRemPair(1),
}

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}

export const lineHeight = {
  default: '1.35',
  // h1: '1.2',
  // h2: '1.2',
  // h3: '1.2',
  // h4: '1.2',
  // button: '1.2',
  // 'body-large': '1.2',
  // 'body-regular': '1.2',
  // 'body-small': '1.2'
}

export const letterSpacing = {
  normal: '0',
}
