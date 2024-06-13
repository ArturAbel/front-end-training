import { Outlet } from 'react-router-dom'
import Button from './Button'

import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <Button to={'/'}>Home</Button>
        <Button to={'/product'}>Products</Button>
      </nav>
      <Outlet /> {/* This will render the child routes */}
      <div>Footer</div>
    </div>
  )
}

export default Header
