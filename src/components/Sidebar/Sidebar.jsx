import css from "./Sidebar.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationFilter,
  setEquipmentFilter,
  setVehicleTypeFilter,
} from "../../redux/filtersSlice";
import iconSvg from "../../assets/icons.svg";

export default function Sidebar() {
  const dispatch = useDispatch();
  const vehicleTypeEntries = {
    paneltruck: "Van",
    fullyintegrated: "Fully Integrated",
    alcove: "Alcove",
  };
  const vehicleEquipment = {
    AC: "AC",
    TV: "TV",
    kitchen: "Kitchen",
    bathroom: "Bathroom",
    transmission: "Automatic",
  };

  const vehicleTypeEntriesIcons = {
    alcove: "icon-bi_grid-3x3-gap",
    fullyintegrated: "icon-bi_grid",
    paneltruck: "icon-bi_grid-1x2",
  };

  const vehicleEquipmentIcons = {
    AC: "icon-wind",
    TV: "icon-tv",
    kitchen: "icon-cup-hot",
    bathroom: "icon-ph_shower",
    transmission: "icon-diagram",
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
                    <svg
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      <use
                        href={`${iconSvg}#${
                          vehicleEquipmentIcons[key] || "icon-default"
                        }`}
                      />{" "}
                    </svg>
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
                    <svg
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      <use
                        href={`${iconSvg}#${
                          vehicleTypeEntriesIcons[value] || "icon-default"
                        }`}
                      />{" "}
                    </svg>
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
