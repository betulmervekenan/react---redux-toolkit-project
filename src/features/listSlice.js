import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const axios = require('axios')

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const fetchData = createAsyncThunk('list/fetchData', () => {
    return axios
      .get('https://fakestoreapi.com/products')
      .then((response) => response.data)
  }
)

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [fetchData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
  }
})

export default listSlice.reducer