import css from "./Sidebar.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationFilter,
  setEquipmentFilter,
  setVehicleTypeFilter,
} from "../../redux/filtersSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const vehicleTypeEntries = {
    alcove: "Alcove",
    fullyintegrated: "Fully Integrated",
    paneltruck: "Panel Truck",
  };
  const vehicleEquipment = {
    AC: "AC",
    TV: "TV",
    kitchen: "Kitchen",
    bathroom: "Bathroom",
    transmission: "Automatic",
  };

  return (
    <div className={css.sidebarContainer}>
      <Formik
        initialValues={{
          location: "",
          equipment: [],
          vehicleType: "",
        }}
        onSubmit={(values) => {
          dispatch(setLocationFilter(values.location));
          dispatch(setEquipmentFilter(values.equipment));
          dispatch(setVehicleTypeFilter(values.vehicleType));
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.sbLocation}>
              <label htmlFor="location">Location</label>
              <Field
                className={css.field}
                type="text"
                name="location"
                placeholder="City"
              />
            </div>
            <div className={css.vehicleEquipment}>
              <p>Filters</p>
              <h4>Vehicle Equipment</h4>
              <div className={css.tilesWrapper}>
                {Object.entries(vehicleEquipment).map(([key, label]) => (
                  <label
                    key={key}
                    className={`${css.tile} ${
                      values.equipment.includes(key) ? css.selected : ""
                    }`}
                  >
                    <Field
                      type="checkbox"
                      name="equipment"
                      value={key}
                      onChange={() => {
                        if (values.equipment.includes(key)) {
                          setFieldValue(
                            "equipment",
                            values.equipment.filter((eq) => eq !== key)
                          );
                        } else {
                          setFieldValue("equipment", [
                            ...values.equipment,
                            key,
                          ]);
                        }
                      }}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div className={css.vehicleType}>
              <h4>Vehicle Type</h4>
              <div className={css.tilesWrapper}>
                {Object.entries(vehicleTypeEntries).map(([value, label]) => (
                  <label
                    key={value}
                    className={`${css.tile} ${
                      values.vehicleType === value ? css.selected : ""
                    }`}
                  >
                    <Field type="radio" name="vehicleType" value={value} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className={css.submitButton}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
