import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import authApi from 'src/api/authApi';
import userApi from 'src/api/userApi';
import {
  ToastError,
  ToastLoading,
  ToastSuccess,
} from 'src/components/Toast/Toast';
import { setLoading } from 'src/app/store/slices/CommonSlice';
import { removeCookie } from 'src/utils/removeCookie';

export function detectLogin() {
  const token = Cookies.get('access_token');
  if (token) {
    return true;
    // get user id from token
  }
  return false;
}

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      // dispatch(setLoading(true));
      const token = localStorage.getItem('access_token');
      if (token) {
        const response = await userApi.getInfo();
        const data = response?.data;
        // dispatch(setLoading(false));
        // const identification = data?.identification;

        // if (!identification) {
        //   history.replace(RouteConstant.UpdateInfoUser);
        // }
        return data;
      }
      // dispatch(setLoading(false));
      return null;
    } catch (error) {
      dispatch(logout());
      // dispatch(setLoading(false));
      ToastError(error?.response.data?.message);
      return rejectWithValue(error?.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await authApi.login(payload);
      const result = response?.data?.email;
      Cookies.set('access_token', response.data.access_token, { expires: 1 });
      Cookies.set('email', response.data.email, { expires: 1 });
      Cookies.set('is_candidate', 0, { expires: 1 });
      localStorage.setItem('access_token', response.data.access_token);
      dispatch(setLoading(false));
      ToastSuccess(response?.message);
      return result;
    } catch (error) {
      dispatch(setLoading(false));
      ToastError(error?.response?.data?.message);
      return rejectWithValue(error?.response.data);
    }
  }
);
export const signup = createAsyncThunk(
  'auth/signup',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      ToastLoading('Signing up...');
      dispatch(setLoading(true));
      const { email, password } = payload.formData;
      const responseSignup = await authApi.signup(payload.formData);
      const responseLogin = await authApi.login({ email, password });
      Cookies.set('access_token', response.data.access_token, { expires: 1 });
      localStorage.setItem('access_token', response.data.access_token);
      dispatch(setLoading(false));
      ToastSuccess(response?.message);
      return responseLogin;
    } catch (error) {
      dispatch(setLoading(false));
      ToastError(error?.response.data.message);
      return rejectWithValue(error?.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await authApi.forgotPassword(payload);
      dispatch(setLoading(false));
      ToastSuccess(response?.message);
      return response;
    } catch (error) {
      dispatch(setLoading(false));
      ToastError(error?.response?.data?.message);
      return rejectWithValue(error?.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await authApi.resetPassword(payload);
      dispatch(setLoading(false));
      ToastSuccess(response?.message);
      return response;
    } catch (error) {
      dispatch(setLoading(false));
      ToastError(error?.response?.data?.message);
      return rejectWithValue(error?.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = {};

      // const response = await authApi.logout(payload);
      removeCookie();
      return response;
    } catch (error) {
      return rejectWithValue(error?.response.data);
    }
  }
);

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};
const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: {
    // getCurrentUser
    // [getCurrentUser.fulfilled]: (state, action) => {
    //   state.currentUser = action.payload;
    //   state.error = undefined;
    //   state.loading = false;
    // },
    // [getCurrentUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // [getCurrentUser.pending]: (state, action) => {
    //   state.loading = true;
    //   state.error = undefined;
    // },
    // login
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.error = undefined;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [login.pending]: (state, action) => {
      state.error = undefined;
    },
    // signup
    [signup.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      // state.isLoggedIn = true;
      state.error = undefined;
    },
    [signup.pending]: (state, action) => {
      state.error = undefined;
    },
    [signup.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
    },
    // logout
    [logout.fulfilled]: (state, action) => {
      state = initialState;
    },
    [logout.pending]: (state, action) => {
      // state = initialState;
      state.error = undefined;
    },
    [logout.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
    },
  },
});
//actions
export const authActions = authSlices.actions;
export const { changeIsLoggedIn } = authActions;

// useSelector
export const useAuthSelector = (state) => state.auth;
// currentUser
export const useCurrentUserSelector = (state) => state.auth.currentUser;
// isLoggedIn
export const useIsLoggedInSelector = (state) => state.auth.isLoggedIn;

//reducer
const authReducer = authSlices.reducer;
export default authReducer;
