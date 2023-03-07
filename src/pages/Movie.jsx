import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Movie.module.css";

const detailsURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const detailsImageUrl = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();

  const [detailsMovie, setDetailsMovie] = useState(null);

  const fetchDetailsMovie = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    setDetailsMovie(json);
  };

  useEffect(() => {
    fetchDetailsMovie(`${detailsURL}/${id}?${apiKey}`);
  }, [id]);
  console.log(detailsMovie);

  return (
    <>
      {!detailsMovie && <h2>Carregando filmes...</h2>}
      {detailsMovie && (
        <div className={styles.card_details}>
          <img src={`${detailsImageUrl}/${detailsMovie.poster_path}`} alt={detailsMovie.title} />
          <h2>{detailsMovie.title}</h2>
          <p>{detailsMovie.popularity}</p>
          <p>{detailsMovie.overview}</p>
          <div>
            <span>{detailsMovie.genres[0].name}</span>, <span>{detailsMovie.genres[1].name}</span>
          </div>
          <p>{detailsMovie.popularity}</p>
          <p>{detailsMovie.runtime} - minutes</p>
        </div>
      )}
    </>
  );
};

export default Movie;
