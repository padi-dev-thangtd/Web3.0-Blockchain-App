import { toast } from 'react-toastify';

export const Toast = (status, message, time) => {
  toast.dismiss();
  toast[status || 'success'](message || 'success', {
    position: 'top-right',
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const ToastSuccess = (message, time) => {
  toast.dismiss();
  toast['success'](message || 'success', {
    position: 'top-right',
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const ToastError = (message, time) => {
  toast.dismiss();
  toast['error'](message || 'error', {
    position: 'top-right',
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastLoading = (message, time) => {
  toast.dismiss();
  toast['loading'](message || 'loading', {
    position: 'top-right',
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
