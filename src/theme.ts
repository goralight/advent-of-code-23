interface Color {
  light?: string
  main: string
  dark?: string
}

interface GreyColor extends Color {
  white: string
  black: string
}

interface OrdinalColor {
  pastel?: string
  main: string
  muted?: string
}

export interface StandardTheme {
  palette: {
    primary: OrdinalColor,
    secondary: OrdinalColor,
    tertiary?: OrdinalColor,
    state?: {
      success: string,
      error: string,
      warning: string,
    },
    colors: {
      grey: GreyColor
      red: Color
      green: Color
      blue: Color
    } & Record<string, Color>,
  },
}

// todo: add more theme properties; font, spacing, border, etc.

export const advent23Theme: StandardTheme = {
  palette: {
    primary: {
      main: '#008a52' // placeholder
    },
    secondary: {
      main: '#70bd91' // placeholder
    },
    state: {
      success: '#70bd91', // placeholder
      error: '#c52425', // placeholder
      warning: '#fac900' // placeholder
    },
    colors: {
      grey: {
        white: '#f5f5f5',
        light: '#aeaeae',
        main: '#bdbdbd',
        dark: '#757575',
        black: '#212121'
      } as GreyColor,
      red: {
        /** cognac */
        light: '#9a360e',
        /** orangeRed */
        main: '#ff4600',
        /** fireEngineRed */
        dark: '#c52425'
      },
      green: {
        /** vistaBlue */
        light: '#94d1b4',
        /** spanishGreen */
        main: '#008a52'
      },
      blue: {
        /** nileBlue */
        main: '#243853',
        /** navy blue */
        dark: '#071126'
      },
      yellow: {
        /** supernova */
        main: '#fac900',
        /** spicyMustard */
        dark: '#6e5a0d'
      },
      brown: {
        /** scotchMist */
        dark: '#efe9cb',
        /** acadia */
        main: '#392f2d'
      },
      pink: {
        /** pastelMagenta */
        main: '#ff9dbf'
      }
    }
  }
}
