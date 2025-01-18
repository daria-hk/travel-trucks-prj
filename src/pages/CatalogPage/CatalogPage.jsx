import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campersOps.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage.jsx";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import css from "./CatalogPage.module.css";
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
        <div className={css.catalogPage}>
          <Sidebar />
          <CatalogList items={items} />
        </div>
      ) : (
        <p>No options available at the moment.</p>
      )}
    </>
  );
}
