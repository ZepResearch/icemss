import { toast } from 'react-toastify';

export const useCustomToast = () => {
  const showSuccessToast = (message, options = {}) => {
    return toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  const showErrorToast = (message, options = {}) => {
    return toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};