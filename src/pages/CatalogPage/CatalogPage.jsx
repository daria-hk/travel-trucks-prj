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
import {
  selectLocationFilter,
  selectEquipmentFilter,
  selectVehicleTypeFilter,
} from "../../redux/filtersSlice";

export default function CatalogPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectCampers);
  const locationFilter = useSelector(selectLocationFilter);
  const equipmentFilter = useSelector(selectEquipmentFilter);
  const vehicleTypeFilter = useSelector(selectVehicleTypeFilter);

  const dispatch = useDispatch();

  // State für die Anzahl der angezeigten Items
  const [visibleItemsCount, setVisibleItemsCount] = useState(3);

  useEffect(() => {
    // Lade die Camper-Daten beim ersten Rendern
    dispatch(fetchCampers());
  }, [dispatch]);

  const filteredItems = items.filter((item) => {
    const locationMatch = locationFilter
      ? item.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;

    const vehicleTypeMatch = vehicleTypeFilter
      ? item.form.toLowerCase().includes(vehicleTypeFilter.toLowerCase())
      : true;

    const equipmentMatch = equipmentFilter.every((equipment) => {
      return equipment.every((e) => {
        return item[e] === true || item[e] === "automatic";
      });
    });

    return locationMatch && vehicleTypeMatch && equipmentMatch;
  });

  // Funktion zum Laden von mehr Items
  const loadMoreItems = () => {
    setVisibleItemsCount(visibleItemsCount + 3); // Erhöhe die Anzahl der angezeigten Items um 3
  };

  // Die momentan angezeigten Items (basierend auf der sichtbaren Anzahl)
  const visibleItems = filteredItems.slice(0, visibleItemsCount);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMassage />}

      <div className={css.catalogPage}>
        <main>
          <Sidebar />
          {filteredItems.length > 0 ? (
            <div className={css.wrapperCatalogPage}>
              <CatalogList items={visibleItems} />
              {visibleItemsCount < filteredItems.length && (
                <button className={css.loadMoreButton} onClick={loadMoreItems}>
                  Load More
                </button>
              )}
            </div>
          ) : (
            <p className={css.noOptions}>No options available at the moment.</p>
          )}
        </main>
      </div>
    </>
  );
}
