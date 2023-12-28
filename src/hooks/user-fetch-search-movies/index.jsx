import React from 'react';

import { api } from '../../api-config/index.js';

export const UserSearchMovies = (movie, config) => {
   const [data, setData] = React.useState([]);
   const [loading, setLoading] = React.useState(true);

   const { key, search } = api;

   React.useEffect(() => {
      const searcMovies = async () => {
         try {
            const res = await fetch(`${search}?query=${movie}&api_key=${key}&language=pt_br`, config);
            if (!res.ok) return;
            const json = await res.json();
            setData(json.results);
         } catch (error) {
            setData(null);
         } finally {
            setLoading(false);
         }
      };

      searcMovies();
   }, [movie]);

   return { data, loading };
};
