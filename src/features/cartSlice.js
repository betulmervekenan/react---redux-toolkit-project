import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: {},
  cartOpen: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart[action.payload]) {
        state.cart[action.payload] +=1;
      } else {
        state.cart[action.payload] = 1;
      }
    },
    setCartOpen: (state, action) => {
      state.cartOpen = action.payload;
    }
  }
})

export const { addToCart, setCartOpen } = cartSlice.actions;
export default cartSlice.reducer;