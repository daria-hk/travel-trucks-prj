import css from "./HomePage.module.css";
import { NavLink } from "react-router";

export default function Home() {
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
