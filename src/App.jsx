import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { router } from './routes';

import { MovieContextProvider } from './context/movie-context';

export const App = () => {
   return (
      <>
         <MovieContextProvider>
            <Toaster
               position="top-center"
               reverseOrder={false}
               toastOptions={{
                  style: {
                     fontSize: '14px',
                  },
               }}
            />
            <RouterProvider router={router} />
         </MovieContextProvider>
      </>
   );
};
