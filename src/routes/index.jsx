import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/layout';

import { Home } from '../pages/home';
import { Detail } from '../pages/detail';
import { Search } from '../pages/search';

export const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            element: <Home />,
            path: '/',
         },
         {
            element: <Detail />,
            path: '/detalhes/:id',
         },
         {
            element: <Search />,
            path: '/search',
         },
      ],
   },
]);
