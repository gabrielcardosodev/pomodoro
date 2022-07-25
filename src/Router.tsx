import { Route, Routes } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { DefaultScreen } from './screens/DefaultScreen'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultScreen />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
