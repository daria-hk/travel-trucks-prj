import { Link, useLocation } from "react-router";

const CatalogList = ({ items, onImageClick }) => {
  const location = useLocation();
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );
  console.log("uniqueItems", uniqueItems);

  return (
    <ul>
      {uniqueItems.map(({ id, name }) => (
        <Link key={id} to={`${id}`} state={location}>
          {name}
        </Link>
      ))}
    </ul>
  );
};

export default CatalogList;
