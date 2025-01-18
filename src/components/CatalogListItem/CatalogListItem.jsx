import css from "./CatalogListItem.module.css";
import { Link, useLocation } from "react-router";

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
  return (
    <li key={id} className={css.catalogItem}>
      <img src={gallery[0].thumb} alt={`${name} Thumbnail`} />
      <div className={css.columnRight}>
        <div className={css.headLine}>
          <p>{name}</p>
          <p className={css.price}>{`€${parseFloat(price).toFixed(2)}`}</p>
        </div>
        <div className={css.subHeadLine}>
          <p
            className={css.reviews}
          >{`${rating}(${reviews.length}) Reviews`}</p>
          <p className={css.location}>{location}</p>
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.equipment}>
          {kitchen && (
            <p className={`${css.kitchenTile} ${css.equipmentTile}`}>Kitchen</p>
          )}
          {transmission === "automatic" && (
            <p className={`${css.transmissionTile} ${css.equipmentTile}`}>
              Automatic
            </p>
          )}
          {AC && <p className={`${css.acTile} ${css.equipmentTile}`}>AC</p>}
          {bathroom && (
            <p className={`${css.bathroomTile} ${css.equipmentTile}`}>
              Bathroom
            </p>
          )}
          {TV && <p className={`${css.tvTile} ${css.equipmentTile}`}>TV</p>}
          {engine === "petrol" && (
            <p className={`${css.engineTole} ${css.equipmentTile}`}>Petrol</p>
          )}
        </div>
        <button>
          <Link to={`${id}`} state={location}>
            Show more
          </Link>
        </button>
      </div>
    </li>
  );
};

export default CatalogListItem;
