import EquipmentChips from "../EquipmentChips/EquipmentChips";
import css from "./CatalogListItem.module.css";
import { Link } from "react-router";

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
  const camper = {
    kitchen,
    transmission,
    TV,
    AC,
    bathroom,
    engine,
  };

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
        <EquipmentChips camper={camper} />

        <Link to={`${id}`} state={location}>
          <button> Show more</button>
        </Link>
      </div>
    </li>
  );
};

export default CatalogListItem;
