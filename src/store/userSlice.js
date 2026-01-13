import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuth')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.user = action.payload
      localStorage.setItem('isAuth', true)
      localStorage.setItem('user', JSON.stringify(action.payload))
    },

    logout(state) {
      state.isAuthenticated = false
      state.user = null
      localStorage.removeItem('isAuth')
      localStorage.removeItem('user')
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer