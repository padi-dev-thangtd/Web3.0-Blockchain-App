import apiClient from './apiClient';

const userApi = {
  updateInfo(payload) {
    const url = '/users/update-info';
    return apiClient.post(url, payload);
  },
  getInfo() {
    const url = '/users/get-info';
    return apiClient.get(url);
  },
};
export default userApi;
