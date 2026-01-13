import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to MyStore 🛍️
          </h1>

          <p className="text-gray-600 mb-6">
            A modern e-commerce frontend built with React, Redux Toolkit,
            and Tailwind CSS. Browse products, manage your cart, and
            experience smooth performance.
          </p>

          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded transition hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>

        {/* Visual Card */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 w-32 bg-blue-100 rounded flex items-center justify-center transition hover:scale-105">
            📱
          </div>
          <div className="h-32 w-32 bg-green-100 rounded flex items-center justify-center transition hover:scale-105">
            🎧
          </div>
          <div className="h-32 w-32 bg-yellow-100 rounded flex items-center justify-center transition hover:scale-105">
            💻
          </div>
          <div className="h-32 w-32 bg-pink-100 rounded flex items-center justify-center transition hover:scale-105">
            ⌚
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home