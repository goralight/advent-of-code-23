import '@emotion/react'

import { Advent23Theme } from './theme'

declare module '@emotion/react' {
  export interface Theme extends Advent23Theme {}
}
