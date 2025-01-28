import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router'
import theme from '~/theme/theme'

const queryClient = new QueryClient()

/**
 * A provider that provides other providers for the app.
 */
const AppProvider = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default AppProvider
