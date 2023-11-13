import React from 'react'
import Slingshot from './__mocks__/meteor/packages/slingshot'
// import StylesProvider from '@mui/styles/StylesProvider'
// import { MyThemeProvider } from '../imports/ui/contexts/theme-context'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
// import { Box } from '@mui/material'

// Need to set a global here
window.Slingshot = Slingshot

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

const StylesProvider = ({ children }) => <div>{children}</div>
const MyThemeProvider = ({ children }) => <div>{children}</div>
const Box = ({ children }) => <div>{children}</div>

export const decorators = [
  (Story, { kind }) => {
    let story = <Story />

    return (
      <StylesProvider injectFirst>
        <MyThemeProvider>
          <Box>{story}</Box>
        </MyThemeProvider>
      </StylesProvider>
    )
  },
]
