import { AiFillStar } from "react-icons/ai";

const imgURL = import.meta.env.VITE_IMG;

import styles from "./CardMovie.module.css";

const CardMovie = ({ movie }) => {
  return movie.map((item, index) => (
    <div className={styles.card_container} key={index}>
      <img src={`${imgURL}/${item.poster_path}`} alt={item.title} />
      <h3>{item.title}</h3>
      <div className={styles.average_container}>
        <AiFillStar className={styles.icon} />
        <p>{item.vote_average}</p>
      </div>
    </div>
  ));
};

export default CardMovie;
