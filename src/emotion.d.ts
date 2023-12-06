import '@emotion/react'

import { Advent23Theme } from './theme'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends Advent23Theme {}
}
