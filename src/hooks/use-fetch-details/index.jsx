import React from 'react';

import { api } from '../../api-config/index.js';

export const UseFetchDetails = (id, config) => {
   const [data, setData] = React.useState(null);
   const [loading, setLoading] = React.useState(true);

   const { key, movie: url } = api;

   React.useEffect(() => {
      const fetchMovie = async () => {
         try {
            const res = await fetch(`${url}/${id}?api_key=${key}&language=pt-br`, config);
            const json = await res.json();
            setData(json);
         } catch (error) {
            setData(null);
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      fetchMovie();
   }, [id]);

   return { data, loading };
};
