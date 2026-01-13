import { useSelector, useDispatch } from 'react-redux'
import { removeFromCompare, clearCompare } from '../store/compareSlice'

const Compare = () => {
  const items = useSelector(state => state.compare.items)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return <p className="p-6">No products selected for comparison</p>
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Product Comparison
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="border p-4 rounded">
            <h3 className="font-semibold">{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Rating: ⭐ {item.rating}</p>

            <button
              onClick={() => dispatch(removeFromCompare(item.id))}
              className="mt-2 text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => dispatch(clearCompare())}
        className="mt-4 bg-gray-200 px-4 py-2 rounded"
      >
        Clear Comparison
      </button>
    </div>
  )
}

export default Compare