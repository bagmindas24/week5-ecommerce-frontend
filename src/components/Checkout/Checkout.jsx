import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { clearCart } from '../../store/cartSlice'
import Button from '../common/Button'

const Checkout = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuthenticated)

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    card: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Protect route
  if (!isAuth) {
    return <Navigate to="/" />
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.name || !formData.address || !formData.card) {
      setError('All fields are required')
      return
    }

    if (formData.card.length < 12) {
      setError('Invalid card number')
      return
    }

    // Successful checkout simulation
    setError('')
    setSuccess(true)

    // ✅ Clear cart after successful order
    dispatch(clearCart())
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {success ? (
        <p className="text-green-600 font-semibold">
          Order placed successfully 🎉
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-2"
            placeholder="Name"
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border w-full p-2"
            placeholder="Address"
          />

          <input
            name="card"
            value={formData.card}
            onChange={handleChange}
            className="border w-full p-2"
            placeholder="Card Number"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full">
            Place Order
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout