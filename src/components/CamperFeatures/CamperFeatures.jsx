import { useSelector } from "react-redux";
import {
  selectCamperDetail,
  selectError,
  selectIsLoading,
} from "../../redux/campersSlice";
import EquipmentChips from "../EquipmentChips/EquipmentChips";
import css from "./CamperFeatures.module.css";

export default function CamperFeatures() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamperDetail) || []; // Standardwert für `camper`

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;

  console.log(camper);

  return (
    <div className={css.features}>
      <EquipmentChips camper={camper} />
      <div className={css.vehicleDetails}>
        <h4>Vehicle details</h4>
        <div className={css.tableDetails}>
          <div>
            <p>Form</p> <p>{camper.form}</p>
          </div>
          <div>
            <p>Length</p> <p>{camper.length}</p>
          </div>
          <div>
            <p>Width </p>
            <p> {camper.width}</p>
          </div>
          <div>
            <p>Height</p> <p>{camper.height}</p>
          </div>
          <div>
            <p>Tank</p> <p>{camper.tank}</p>
          </div>
          <div>
            <p>Consumption </p>
            <p> {camper.consumption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
