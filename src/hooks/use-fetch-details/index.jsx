import React from 'react';

const url = import.meta.env.VITE_APP_MOVIE;
const key = import.meta.env.VITE_APP_KEY;

export const UseFetchDetails = (id, config) => {
   const [data, setData] = React.useState(null);
   const [loading, setLoading] = React.useState(true);

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
