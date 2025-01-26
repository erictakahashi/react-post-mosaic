import { render, screen } from '~/utils/test/utils'
import Header from '../Header'

/**
 * Factory function to render the `Header` component.
 */
const setup = () => render(<Header />)

describe('Header', () => {
  it('should render the default text', () => {
    setup()
    const text = screen.queryByText('React Post Mosaic')
    expect(text).toBeInTheDocument()
  })
})
