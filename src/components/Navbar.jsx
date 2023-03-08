import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import { MdLocalMovies } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.length === 0) return;

    navigate(`search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className={styles.navbar_container}>
      <div className={styles.logo_container}>
        <MdLocalMovies />
        <h2>WebMovies</h2>
      </div>
      <div className={styles.links_container}>
        <NavLink to="/">Home</NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque por um filme..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button>
          <BsFillCameraReelsFill className={styles.btn_icon} />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
