import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import TravelTrucksLogo from "../../assets/TravelTrucks.svg";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <img src={TravelTrucksLogo} alt="Travel Trucks Logo" />
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/campers" className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}
