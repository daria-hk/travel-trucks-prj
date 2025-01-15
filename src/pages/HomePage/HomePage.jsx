import { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchCampers } from "../../themoviedb-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage.jsx";
import css from "./HomePage.module.css";
import HeroImg from "../../assets/Hero image.svg";
import { NavLink } from "react-router";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      setError(false);

      try {
        const data = await fetchTrendingMovies();
        console.log(data);
        setItems(data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  return (
    <div className={css.homeBackground}>
      <div className={css.wrapper}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>
        <NavLink to="/campers">
          <button>View Now</button>
        </NavLink>
      </div>
    </div>
  );
}
