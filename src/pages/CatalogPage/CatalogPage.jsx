import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campersOps.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage.jsx";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/campersSlice.js";

export default function CatalogPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {items.length > 0 ? (
        <CatalogList items={items} />
      ) : (
        <p>No options available at the moment.</p>
      )}
    </>
  );
}
