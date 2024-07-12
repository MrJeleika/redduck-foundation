import { toast } from 'react-toastify';

export const showTxToast = (methodName: string, promise: () => Promise<void>) =>
  toast.promise(promise, {
    pending: `${methodName} in progress`,
    success: `${methodName} completed`,
    error: `${methodName} failed`,
  });
