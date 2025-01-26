import { CssBaseline, ThemeProvider } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router'
import theme from '~/theme/theme'

/**
 * A provider that provides other providers for the app.
 */
const AppProvider = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}

export default AppProvider
