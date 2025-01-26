import { Route, Routes } from 'react-router'
import { AppRoutesEnum } from '~/models/enums/AppRoutesEnum'
import { Home } from '~/modules/Home/Home'
import AppProvider from '~/providers/AppProvider'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path={AppRoutesEnum.HOME} element={<Home />} />
      </Routes>
    </AppProvider>
  )
}

export default App
