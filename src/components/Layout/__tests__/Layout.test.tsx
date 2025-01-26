import { render, screen } from '~/utils/test/utils'
import Layout, { type LayoutProps } from '../Layout'

/**
 * Factory function to render the `Layout` component.
 */
const setup = (props: LayoutProps) => render(<Layout {...props} />)

describe('Header', () => {
  it('should render the children text', () => {
    const children = 'Children Text'
    setup({ children })
    const text = screen.queryByText(children)
    expect(text).toBeInTheDocument()
  })
})
