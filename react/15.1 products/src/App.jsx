import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product from './Product'
import Header from './Header'
import Home from './Home'
import Item from './Item'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/product',
        element: <Product />,
        children: [{ path: ':id', element: <Item /> }],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
