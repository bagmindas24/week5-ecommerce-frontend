import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addToCompare } from '../../store/compareSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <div className="border rounded p-4 shadow transition hover:shadow-lg hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 mx-auto"
        loading="lazy"
      />

      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>

      <div className="flex justify-between items-center mt-3">
        <Link
          to={`/products/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          View
        </Link>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-500 text-white px-2 py-1 rounded transition hover:bg-blue-600"
        >
          Add
        </button>

        <button
          onClick={() => dispatch(addToCompare(product))}
          className="border px-2 py-1 rounded text-sm hover:bg-gray-100"
        >
          Compare
        </button>
      </div>

      {/* Wishlist */}
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="mt-2 text-sm text-pink-500 transition hover:underline"
      >
        {wishlisted ? '♥ Wishlisted' : '♡ Add to Wishlist'}
      </button>
    </div>
  )
}

export default ProductCard