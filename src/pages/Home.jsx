import { useFecthItems } from "../hooks/useFecthItems";
import CardMovie from "../components/CardMovie";

const topRatedURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import styles from "./Home.module.css";

const Home = () => {
  const { data: items, loading } = useFecthItems(`${topRatedURL}/top_rated?${apiKey}`);

  return (
    <div className={styles.home_container}>
      {/* <h2>Melhores filmes...</h2> */}
      {loading && <h2>Carregando filmes...</h2>}
      {items && <CardMovie movie={items} />}
    </div>
  );
};

export default Home;
