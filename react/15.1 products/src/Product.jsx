import { Link, Outlet } from 'react-router-dom'
import { data } from './API'

const Product = () => {
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} to={`${item.id}`}>{item.title}</Link>
      ))}

      <Outlet />
    </div>
  )
}

export default Product
