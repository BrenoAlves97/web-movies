import { useState, useEffect } from "react";

export const useFecthItems = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fecthData = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    setData(json.results);
    setLoading(false);
  };

  useEffect(() => {
    fecthData(url);
    console.log(data);
  }, []);

  return { data, loading };
};
