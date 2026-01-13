import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
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
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 1999.99,
      category: 'Electronics',
      rating: 4.6,
      image: '/images/bluetooth_speaker.png'
    },
    {
      id: 4,
      name: 'USB-C Cable',
      price: 199.99,
      category: 'Accessories',
      rating: 4.1,
      image: '/images/usb-c_cable.png'
    }
  ]
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productSlice.reducer