import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Movie.module.css";

import Spinner from "../components/Spinner";

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
    const URL = `${detailsURL}/${id}?${apiKey}&language=pt-BR`;
    fetchDetailsMovie(URL);
  }, []);
  console.log(detailsMovie);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      {!detailsMovie && <Spinner />}
      {detailsMovie && (
        <div className={styles.card_details}>
          <img src={`${detailsImageUrl}/${detailsMovie.poster_path}`} alt={detailsMovie.title} />

          <h2 className={styles.title}>{detailsMovie.title}</h2>
          {detailsMovie.tagline && (
            <p className={styles.tagline}>
              <em>{`"${detailsMovie.tagline}"`}</em>
            </p>
          )}

          {detailsMovie.overview.length > 5 && (
            <div className={styles.about_movie_container}>
              <h3>Visão Geral:</h3>
              <p>{detailsMovie.overview}</p>
            </div>
          )}

          <p className={styles.genres_movie}>
            <span>Gêneros</span>: <span>{detailsMovie.genres[0].name}</span>,{" "}
            <span>{detailsMovie.genres[1].name}</span>
          </p>

          {detailsMovie.revenue > 0 && (
            <p>Receita: {formatCurrency(detailsMovie.revenue.toLocaleString())} </p>
          )}
          {detailsMovie.budget > 0 && (
            <p>Orçamento: {formatCurrency(detailsMovie.budget.toLocaleString())} </p>
          )}

          <p>Data de lançamento: {detailsMovie.release_date}</p>
          <p>Duração: {detailsMovie.runtime} minutos.</p>
        </div>
      )}
    </>
  );
};

export default Movie;
