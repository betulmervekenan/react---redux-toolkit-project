import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  modalOpen: false,
  selectedItemId: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setSelectedItemId: (state, action) => {
      state.selectedItemId = action.payload;
    },
  }
})

export const {
  setModalOpen,
  setSelectedItemId,
} = appSlice.actions;
export default appSlice.reducer;