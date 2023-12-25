import React from 'react';

export const UseFetchItems = (url, config) => {
   const [data, setData] = React.useState([]);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(url, config);
            if (!res.ok) return console.log('Houve algum erro');
            const json = await res.json();
            setData(json.results);
            console.log(json.results);
         } catch (error) {
            console.log('Error: ', error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [url]);

   return { data, loading };
};
