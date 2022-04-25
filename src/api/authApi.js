import apiClient from './apiClient';

const authApi = {
  login(payload) {
    const url = '/login';
    return apiClient.post(url, payload);
  },
  logout(payload) {
    const url = '/logout';
    return apiClient.post(url, payload);
  },
  signup(payload) {
    const url = '/register';
    return apiClient.post(url, payload);
  },
  forgotPassword(payload) {
    const url = '/forgot-password';
    return apiClient.post(url, payload);
  },
  resetPassword(payload) {
    const url = '/reset-password';
    return apiClient.post(url, payload);
  },
};
export default authApi;
