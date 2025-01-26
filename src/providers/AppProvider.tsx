import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router'

/**
 * A provider that provides other providers for the app.
 */
export const AppProvider = (props: PropsWithChildren) => {
  const { children } = props

  return <BrowserRouter>{children}</BrowserRouter>
}

export default AppProvider
