export interface Advent23Theme {
  colors: {
    grey: {
      /** White */
      white: string
      /** Light gray, bombay */
      lightGrey: string
      /** Gray */
      grey: string
      /** Dark gray */
      darkGrey: string
      /** Black */
      black: string
    }
    yellow: {
      /** Yellow / Warning */
      supernova: string
      /** Dark yellow */
      spicyMustard: string
    }
    red: {
      /** Red / Error */
      orangeRed: string
      /** Dark red */
      cognac: string
      /** Dark red */
      fireEngineRed: string
    }
    green: {
      /** Light green */
      silverTree: string
      /** Very light green */
      turquoiseGreen: string
      /** Medium green */
      spanishGreen: string
      /** Dark green */
      cruseo: string
      /** Darkest green */
      countyGreen: string
      /** Lightest green - Placeholder color */
      padua: string
      /** Light green - Placeholder color */
      vistaBlue: string
    }
    brown: {
      /** Brown */
      acadia: string
      /** Light brown */
      scotchMist: string
    }
    blue: {
      /** Blue */
      nileBlue: string
      /** Navy blue */
      blackPearl: string
    }
    pink: {
      /** Pink */
      pastelMagenta: string
    }
  }
}

export const advent23Theme: Advent23Theme = {
  colors: {
    grey: {
      white: '#f5f5f5',
      lightGrey: '#aeaeae',
      grey: '#bdbdbd',
      darkGrey: '#757575',
      black: '#212121' /* black */
    },
    yellow: {
      supernova: '#fac900' /* yellow / warning */,
      spicyMustard: '#6e5a0d' /* dark yellow */
    },
    red: {
      orangeRed: '#ff4600' /* red / error */,
      cognac: '#9a360e' /* dark red */,
      fireEngineRed: '#c52425' /* dark red */
    },
    green: {
      silverTree: '#70bd91' /* light green */,
      turquoiseGreen: '#a0ccb7' /* very light green */,
      spanishGreen: '#008a52' /* medium green */,
      cruseo: '#0a5d2c' /* dark green */,
      countyGreen: '#003d19' /* darkest green */,
      padua: '#b1e3cc' /* lightest green - placeholder color */,
      vistaBlue: '#94d1b4' /* light green - placeholder color */
    },
    brown: {
      acadia: '#392f2d' /* brown */,
      scotchMist: '#efe9cb' /* light brown */
    },
    blue: {
      nileBlue: '#243853' /* blue */,
      blackPearl: '#071126' /* navy blue */
    },
    pink: {
      pastelMagenta: '#ff9dbf' /* pink */
    }
  }
}
