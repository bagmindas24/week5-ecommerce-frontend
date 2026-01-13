import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Header from './components/Header/Header'

//Lazy-loaded pages 
const Home = lazy(() => import('./pages/Home'))
const ProductList = lazy(() => import('./pages/ProductList'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Compare = lazy(() => import('./pages/Compare'))
const CartPage = lazy(() => import('./pages/CartPage'))
const Checkout = lazy(() => import('./components/Checkout/Checkout'))

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<p className="p-4">Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App