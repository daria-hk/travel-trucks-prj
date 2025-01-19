import css from "./CatalogList.module.css";
import { useLocation } from "react-router";
import CatalogListItem from "../CatalogListItem/CatalogListItem";

const CatalogList = ({ items }) => {
  const location = useLocation();
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );
  return (
    <ul className={css.catalogList}>
      {uniqueItems.map((item) => (
        <CatalogListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CatalogList;
