import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import { ThemeProvider } from "@emotion/react";
import { advent23Theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'Dark',
      values: [
        { name: 'Dark', value: '#222222' },
        { name: 'Light', value: '#f5f5f5' },
      ],
    },
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
