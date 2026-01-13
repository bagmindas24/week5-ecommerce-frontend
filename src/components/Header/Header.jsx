import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../store/userSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '../common/Button'


const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuthenticated)
  const cartCount = useSelector(state => state.cart.items.length)
  const products = useSelector(state => state.products.products)

  const [query, setQuery] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold transition-colors hover:text-blue-600"
      >
        MyStore
      </Link>

      {/* Search with autocomplete */}
      <div className="relative w-1/3">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full border px-3 py-1 rounded"
        />

        {query && (
          <div className="absolute bg-white border w-full mt-1 rounded shadow z-10">
            {filteredProducts.slice(0, 5).map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="block px-3 py-2 hover:bg-gray-100"
                onClick={() => setQuery('')}
              >
                {product.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Right actions */}
      <div className="flex gap-4 items-center">
        <Link
          to="/cart"
          className="relative transition-transform hover:scale-105"
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="ml-1 text-sm font-bold">
              ({cartCount})
            </span>
          )}
        </Link>

        <Link to="/compare">Compare</Link>

        {isAuth ? (
          <Button variant="danger" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={() => dispatch(login({ name: 'Demo User' }))}
          >
            Login
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header