import React from 'react';

export const useFecthItems = (url) => {
   const [data, setData] = React.useState(null);
   const [loading, setLoading] = React.useState(false);

   const fecthData = async (url) => {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
      setLoading(false);
   };

   React.useEffect(() => {
      fecthData(url);
      console.log(data);
   }, []);

   return { data, loading };
};
