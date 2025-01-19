import { useEffect } from "react";
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

  useEffect(() => {
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
      const itemEquipmentValue = item[equipment];
      return (
        itemEquipmentValue === true ||
        itemEquipmentValue === "true" ||
        itemEquipmentValue === "automatic"
      );
    });

    return locationMatch && vehicleTypeMatch && equipmentMatch;
  });

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMassage />}

      <div className={css.catalogPage}>
        <main>
          <Sidebar />
          {filteredItems.length > 0 ? (
            <CatalogList items={filteredItems} />
          ) : (
            <p className={css.noOptions}>No options available at the moment.</p>
          )}
        </main>
      </div>
    </>
  );
}
