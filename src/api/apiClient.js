// import fetchAdapter from '@vespaiach/axios-fetch-adapter';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Router } from 'next/router';
import qs from 'qs';
import { isServer } from 'src/app/isClient';
import { Toast } from 'src/components/Toast/Toast';
import { RouteConstant } from 'src/constants/RouteConstant';
import { removeCookie } from 'src/utils/removeCookie';
// import store from 'src/app/store';
// Set up default config for http requests here
const baseURLApp =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_PRO
    : process.env.NEXT_PUBLIC_API_DEV;
// let store;

// export const injectStore = (_store) => {
//   store = _store;
// };
const apiClient = axios.create({
  baseURL: baseURLApp,
  headers: {
    'content-type': 'application/json',
  },
  // adapter: fetchAdapter,
  // withCredentials: true,
  paramsSerializer: (params) => {
    // if (
    //   params.filters &&
    //   !(typeof params.filters === "string" || params.filters instanceof String)
    // ) {
    //   params.filters = qs.stringify(params.filters);
    // }
    return qs.stringify(params);
  },
});
apiClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...
    console.log({ isServer: isServer });

    const tokenCookie = Cookies.get('access_token');
    // console.log({ tokenCookie });
    // console.log({ store });
    if (tokenCookie) {
      config.headers['Authorization'] =
        // "Bearer " + (token || store.getState().auth.token);
        'Bearer ' + tokenCookie;
    }
    return config;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);
apiClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (typeof window === 'undefined') {
      throw error;
    } else {
      // window.location.href = RouteConstant.Page404;
      const response = error?.response?.data;
      const statusCode = error.response.status;

      if (statusCode === 401) {
        window.location.href = RouteConstant.LoginHr;
        removeCookie();
        Toast.error('Your session has expired. Please login again.');
      }
      if (statusCode === 500) {
        window.location.href = RouteConstant.Page404;

        if (response?.code === 0) {
          removeCookie();
        } else {
        }
      }

      // Handle errors
    }
    return Promise.reject(error);
  }
);
export default apiClient;
