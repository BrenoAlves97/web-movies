import React from 'react';

const searchUrl = import.meta.env.VITE_APP_SEARCH;
const key = import.meta.env.VITE_APP_KEY;

export const UserSearchMovies = (movie, config) => {
   const [data, setData] = React.useState([]);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      const searcMovies = async () => {
         try {
            const res = await fetch(`${searchUrl}?query=${movie}&api_key=${key}&language=pt_br`, config);
            if (!res.ok) return;
            const json = await res.json();
            console.log(json);
            setData(json.results);
         } catch (error) {
            console.log(error);
            setData(null);
         } finally {
            setLoading(false);
         }
      };

      searcMovies();
   }, [movie]);

   return { data, loading };
};
