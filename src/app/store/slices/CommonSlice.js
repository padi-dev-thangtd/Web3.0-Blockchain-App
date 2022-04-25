import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false, loadingActions: false, error: null };
const commonSlices = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoadingActions: (state, action) => {
      state.loadingActions = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {},
});
//actions
export const commonActions = commonSlices.actions;
export const { setLoading, setLoadingActions, setError } = commonActions;
//thunks
export const setLoadingThunk = (payload) => (dispatch) => {
  dispatch(setLoading(payload));
};

// useSelector
export const useLoadingSelector = (state) => state.common.loading;
export const useLoadingActionsSelector = (state) => state.common.loadingActions;
export const useErrorSelector = (state) => state.common.error;
//reducer
const commonReducer = commonSlices.reducer;
export default commonReducer;
