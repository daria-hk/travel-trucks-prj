import { useEffect, useState } from "react";
import { fetchCampers } from "../themoviedb-api.js";
import Loader from "../components/Loader/Loader.jsx";
import ErrorMassage from "../components/ErrorMassage/ErrorMassage.jsx";
import CatalogList from "../components/CatalogList/CatalogList.jsx";

export default function CatalogPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      setError(false);

      try {
        const campersDate = await fetchCampers();
        console.log("campersDate", campersDate);
        setItems(campersDate);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);
  console.log(items);

  return (
    <>
      <h1>Trending Today</h1>
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {items.length > 0 ? (
        <CatalogList items={items} />
      ) : (
        <p>No movies available at the moment.</p>
      )}
    </>
  );
}
