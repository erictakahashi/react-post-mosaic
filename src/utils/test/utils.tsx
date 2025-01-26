import { CssBaseline, ThemeProvider } from '@mui/material'
import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router'
import theme from '~/theme/theme'

/**
 * Custom render.
 * @param ui The UI element to be rendered.
 * @param renderOptions The render options.
 */
const customRender = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const AllTheProviders = ({ children }: { children: ReactNode }) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  return {
    ...render(ui, {
      wrapper: AllTheProviders,
      ...renderOptions,
    }),
  }
}

// Re-export everything.
export * from '@testing-library/react'

// Override render method.
export { customRender as render }
