import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const product = useSelector(state =>
    state.products.products.find(p => p.id === Number(id))
  )

  if (!product) {
    return <p className="p-6">Product not found</p>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-64 mx-auto rounded transition hover:scale-105"
          />

          <div className="flex gap-2 justify-center mt-4">
            <img
              src={product.image}
              className="h-16 w-16 border rounded"
              alt=""
            />
            <img
              src={product.image}
              className="h-16 w-16 border rounded"
              alt=""
            />
            <img
              src={product.image}
              className="h-16 w-16 border rounded"
              alt=""
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-yellow-500 mb-2">
            ⭐ {product.rating} / 5
          </p>

          <p className="text-xl font-semibold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6">
            This is a high-quality product built to meet modern user
            expectations. Perfect for daily use and long-term reliability.
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-green-600 text-white px-6 py-2 rounded transition hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Customer Reviews
        </h2>

        <div className="space-y-4">
          <div className="border p-3 rounded">
            <p className="font-semibold">John D.</p>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600">
              Excellent product! Worth the price.
            </p>
          </div>

          <div className="border p-3 rounded">
            <p className="font-semibold">Sarah M.</p>
            <p className="text-yellow-500">⭐⭐⭐⭐</p>
            <p className="text-gray-600">
              Very good quality and fast delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail