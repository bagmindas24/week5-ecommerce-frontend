import axios from 'axios'

// Create axios instance
const api = axios.create({
  baseURL: 'https://fakeapi.example.com', // mock base URL
  timeout: 5000,
})

// Mock product data 
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1299.99,
    category: 'Electronics',
    rating: 4.5,
    image: '/images/wireless_headphone.png'
  },
  {
    id: 2,
    name: 'Smartphone Case',
    price: 299.99,
    category: 'Accessories',
    rating: 4.2,
    image: '/images/case.png'
  }
]

// Simulated API call
export const getProducts = async () => {
  // simulate network delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts)
    }, 500)
  })
}

export default api