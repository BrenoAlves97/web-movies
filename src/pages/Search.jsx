import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Spinner from "../components/Spinner";
import CardMovie from "../components/CardMovie";

import styles from "./Search.module.css";

const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const fecthSearchMovie = async (url) => {
    setLoading(true);

    const res = await fetch(url);
    const json = await res.json();
    setItems(json.results);
    setLoading(false);
  };

  //

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/search/movie?${apiKey}&query=${query}`;
    fecthSearchMovie(URL);
    console.log(items);
  }, [query]);

  return (
    <div>
      {loading && <Spinner />}
      <h2 className={styles.title_search}>
        Resultados para: <span>{query}</span>
      </h2>
      <div className={styles.search_container}>
        {items && <CardMovie movie={items} showLink={true} />}
      </div>
    </div>
  );
};

export default Search;
