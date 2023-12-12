import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import { ThemeProvider, Global } from "@emotion/react";
import { advent23Theme } from "../src/theme";
import { fontStyles } from "../src/FontStyles";

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

const GlobalStyles = <Global styles={fontStyles} />

export const decorators = [
  (Story) => (
    <>
      {GlobalStyles}
      <Story />
    </>
  ),
  withThemeFromJSXProvider({
    themes: {
      advent23Theme
    },
    defaultTheme: 'advent23Theme',
    Provider: ThemeProvider,
  }),
]

export default preview;
