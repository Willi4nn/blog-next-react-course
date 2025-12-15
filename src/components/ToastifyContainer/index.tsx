'use client';

import { useTheme } from 'next-themes';
import { Bounce, ToastContainer } from 'react-toastify';

export default function ToastifyContainer() {
  const { resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      transition={Bounce}
    />
  );
}
