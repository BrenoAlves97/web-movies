import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { router } from './routes';

export const App = () => {
   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <RouterProvider router={router} />
      </>
   );
};
