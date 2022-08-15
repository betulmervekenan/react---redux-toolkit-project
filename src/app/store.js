import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../features/appSlice'
import listSlice from '../features/listSlice'
import cartSlice from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
    list: listSlice,
    cart: cartSlice,
  },
})