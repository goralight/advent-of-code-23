import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import type { Preview } from "@storybook/react";

import { ThemeProvider } from "@emotion/react";
import { advent23Theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      advent23Theme
    },
    defaultTheme: 'advent23Theme',
    Provider: ThemeProvider,
  }),
]

export default preview;
