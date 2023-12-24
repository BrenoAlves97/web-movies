import React from 'react';

export const UseFetchItems = (url) => {
   const [data, setData] = React.useState([]);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {}, [url]);

   return { data, loading };
};
