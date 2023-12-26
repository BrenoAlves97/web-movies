import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/utilities/container';
import { Loading } from '../../components/utilities/loading';

import { UseFetchDetails } from '../../hooks/use-fetch-details';
import { apiConfig } from '../../config/api-config.js';
import { MovieDetails } from '../../components/movie-details/index.jsx';

const token = import.meta.env.VITE_APP_TOKEN;

export const Detail = () => {
   const { id } = useParams();

   const { data, loading } = UseFetchDetails(id, apiConfig('GET', token));

   if (loading)
      return (
         <Container hScreen={true} placeCenter={true}>
            <Loading size={30} color="#d4d4d8" />
         </Container>
      );

   return (
      <Container hScreen={true}>
         <MovieDetails movie={data} />
      </Container>
   );
};
