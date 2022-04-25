import Cookies from "js-cookie";

export const removeCookie = () => {
  Cookies.remove('access_token');
  Cookies.remove('email');
  Cookies.remove('is_candidate');
  localStorage.removeItem('access_token');
};
