import { Container } from '@mui/material'
import type { PropsWithChildren } from 'react'
import Header from '../Header/Header'

export type LayoutProps = PropsWithChildren

/**
 * The general layout component.
 */
const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr]">
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </div>
  )
}

export default Layout
