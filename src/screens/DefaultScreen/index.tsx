import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultScreenContainer } from './styles'

export function DefaultScreen() {
  return (
    <DefaultScreenContainer>
      <Header />
      <Outlet />
    </DefaultScreenContainer>
  )
}
