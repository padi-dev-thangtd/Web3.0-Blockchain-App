import apiClient from './apiClient';

export const setTokenBearer = (access_token) => {
  if (access_token) {
    apiClient.interceptors.request.use(
      async (config) => {
        // console.log({ access_token });
        if (access_token) {
          config.headers['Authorization'] =
            // "Bearer " + (token || store.getState().auth.token);
            'Bearer ' + access_token;
        }
        return config;
      },
      (error) => {
        // Handle errors
        return Promise.reject(error);
      }
    );
  }
};
