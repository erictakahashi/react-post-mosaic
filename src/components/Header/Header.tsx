import { AppBar, Container, Toolbar, Typography } from '@mui/material'

/**
 * The application header component.
 */
const Header = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h6" noWrap>
          React Post Mosaic
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
)

export default Header
