import EquipmentChips from "../EquipmentChips/EquipmentChips";
import css from "./CatalogListItem.module.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favSlice";
import iconSvg from "../../assets/icons.svg";

const CatalogListItem = ({
  id,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  kitchen,
  transmission,
  TV,
  AC,
  bathroom,
  engine,
  gallery,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const camper = {
    kitchen,
    transmission,
    TV,
    AC,
    bathroom,
    engine,
  };

  const isFavorite = favorites.includes(id);

  const handleAddToFav = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <li key={id} className={css.catalogItem}>
      <img src={gallery[0].thumb} alt={`${name} Thumbnail`} />
      <div className={css.columnRight}>
        <div className={css.headLine}>
          <p>{name}</p>
          <p className={css.price}>{`€${parseFloat(price).toFixed(2)}`}</p>
          <button className={css.favorites} onClick={handleAddToFav}>
            <svg
              style={{
                width: "20px",
                height: "20px",
                fill: isFavorite ? "red" : "grey",
                marginRight: "8px",
              }}
            >
              <use href={`${iconSvg}#icon-star-grey`} />
            </svg>
          </button>
        </div>
        <div className={css.subHeadLine}>
          <p
            className={css.reviews}
          >{`${rating}(${reviews.length}) Reviews`}</p>
          <p className={css.location}>{location}</p>
        </div>
        <p className={css.description}>{description}</p>
        <EquipmentChips camper={camper} />

        <Link to={`${id}`} state={location}>
          <button> Show more</button>
        </Link>
      </div>
    </li>
  );
};

export default CatalogListItem;
