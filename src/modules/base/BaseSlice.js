import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBase = createAsyncThunk(
  'base/getBase',
  async (payload, { rejectWithValue }) => {
    try {
      const response = null;
      //   const response =  call api
      return response;
    } catch (error) {
      return rejectWithValue(error?.response.data);
    }
  }
);

const initialState = {
  status: false,
};
const baseSlices = createSlice({
  name: 'base',
  initialState,
  reducers: {
    // baseReducer: (state) => {
    // },
  },
  extraReducers: {
    // base extraReducers
    // [base.fulfilled]: (state, action) => {},
    // [base.rejected]: (state, action) => {},
    // [base.pending]: (state, action) => {},
  },
});
//actions
export const baseActions = baseSlices.actions;

// useSelector
export const useBaseSelector = (state) => state.auth;

//reducer
const baseReducer = baseSlices.reducer;
export default baseReducer;
