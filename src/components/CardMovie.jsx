import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const imgURL = import.meta.env.VITE_IMG;

import styles from "./CardMovie.module.css";

const CardMovie = ({ movie, showLink = true }) => {
  return movie.map((item, index) => (
    <div className={styles.card_container} key={index}>
      <img src={`${imgURL}/${item.poster_path}`} alt={item.title} />
      <h3>{item.title}</h3>
      <div className={styles.average_container}>
        <AiFillStar className={styles.icon} />
        <p>{item.vote_average}</p>
      </div>
      <Link to={`movie/${item.id}`}>Detalhes...</Link>
    </div>
  ));
};

export default CardMovie;
