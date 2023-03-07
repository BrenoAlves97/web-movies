import { NavLink } from "react-router-dom";

import { MdLocalMovies } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.logo_container}>
        <MdLocalMovies />
        <h2>WebMovies</h2>
      </div>
      <div className={styles.links_container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie/1">Movie</NavLink>
        <NavLink to="/search/movie">Search</NavLink>
      </div>
      <form>
        <input type="text" placeholder="Busque por um filme..." />
        <button>
          <BsFillCameraReelsFill className={styles.btn_icon} />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
