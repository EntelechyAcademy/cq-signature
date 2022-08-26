/**
 * Make sure all imports are relative, starting with `./` and not `~/`.
 * This file isn't processed by webpack. Using `~/` results in some odd runtime problems, without any obvious errors.
 */

 import type { Config } from 'tailwindcss'
 // @ts-expect-error
 import { pxToRem } from '@captaincss/captaincss/helpers'
 import { fontFamily, fontSize, fontWeight, lineHeight } from './config/tailwind/typography'
 import { screens } from './config/tailwind/screens'
 import { spacing } from './config/tailwind/spacing'
 import { safelist } from './config/tailwind/safelist'
 import { colors } from './config/tailwind/colors'

 export default <Config>{
   safelist,
   plugins: [require('@captaincss/captaincss')],
   prefix: 'u-',
   theme: {
     fontSize,
     fontFamily,
     fontWeight,
     lineHeight,
     screens,
     spacing,
     colors,
   },
   content: [
     'app-modules/**/*.{vue,js}',
     'layouts/**/*.vue',
     'pages/**/*.vue',
     'composables/**/*.{js,ts}',
     'plugins/**/*.{js,ts}',
     'App.{js,ts,vue}',
     'app.{js,ts,vue}',
   ],
   captain: {
     prefix: {
       objects: 'o-',
       components: 'c-',
     },
     separator: {
       elements: '__',
       modifiers: '--',
     },
     support: {
       flexGap: true, // https://caniuse.com/flexbox-gap
     },
   },
 }
