import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../store/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const shipping = cartItems.length > 0 ? 19.99 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return <p className="text-center mt-6">Your cart is empty</p>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-4 p-3 border rounded transition hover:shadow"
        >
          <span className="font-medium">{item.name}</span>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value)
                })
              )
            }
            className="w-16 border px-2"
          />

          <span>₹{(item.price * item.quantity).toFixed(2)}</span>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Order Summary */}
      <div className="border-t pt-4 mt-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <Link
          to="/checkout"
          className="block text-center mt-4 bg-blue-600 text-white py-2 rounded transition hover:bg-blue-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart