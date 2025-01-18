import css from "./CatalogList.module.css";
import { Link, useLocation } from "react-router";

const CatalogList = ({ items }) => {
  const location = useLocation();
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );
  console.log("uniqueItems", uniqueItems);

  return (
    <ul className={css.catalogList}>
      {uniqueItems.map(
        ({
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
        }) => (
          <li key={id} className={css.catalogItem}>
            <div className={css.headLine}>
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <div className={css.subHeadLine}>
              <p>{`${rating}(${reviews.length}) Reviews`}</p>
              <p>{location}</p>
            </div>
            <p>{description}</p>
            <div className={css.equipment}>
              {kitchen === true && <p className={css.kitchenTile}>Kitchen</p>}
              {transmission === "automatic" && (
                <p className={css.transmissionTile}>Automatic</p>
              )}
              {AC === true && <p className={css.acTile}>AC</p>}
              {bathroom === true && (
                <p className={css.bathroomTile}>Bathroom</p>
              )}
              {TV === true && <p className={css.tvTile}>TV</p>}
              {engine === "petrol" && <p className={css.engineTole}>Petrol</p>}
            </div>
            <button>
              <Link key={id} to={`${id}`} state={location}>
                Show more
              </Link>
            </button>
          </li>
        )
      )}
    </ul>
  );
};

export default CatalogList;
