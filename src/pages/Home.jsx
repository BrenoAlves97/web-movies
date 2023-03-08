import { useFecthItems } from "../hooks/useFecthItems";

import Spinner from "../components/Spinner";
import CardMovie from "../components/CardMovie";

const topRatedURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import styles from "./Home.module.css";

const Home = () => {
  const { data: items, loading } = useFecthItems(
    `${topRatedURL}/top_rated?${apiKey}&language=pt-BR`
  );

  return (
    <div className={styles.home_container}>
      {/* <h2>Melhores filmes...</h2> */}
      {loading && <Spinner />}
      {!items && <Spinner />}
      {items && <CardMovie movie={items} />}
    </div>
  );
};

export default Home;
