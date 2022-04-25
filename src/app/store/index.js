import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore
} from 'next-redux-cookie-wrapper';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import commonReducer from 'src/app/store/slices/CommonSlice';
import authReducer from 'src/modules/auth/AuthSlice';
import baseReducer from 'src/modules/base/BaseSlice';

const appReducer = combineReducers({
  base: baseReducer,
  common: commonReducer,
  auth: authReducer,
  // user: userReducer,
});
const detectAppReducer = (state, action) => {
  if (state?.auth?.isLoggedIn && action.type === 'auth/logout/fulfilled') {
    localStorage.removeItem('persist:root');
    return appReducer(undefined, { type: undefined });
  }
  return appReducer(state, action);
};
const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    // console.log({ action });
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return detectAppReducer(state, action);
  }
};
export const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ['my.subtree'],
        })
      ),
  })
);

export const wrapper = createWrapper(makeStore);
