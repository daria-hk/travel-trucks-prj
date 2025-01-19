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
  const camper = useSelector(selectCamperDetail);

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;

  return (
    <div className={css.features}>
      <EquipmentChips camper={camper} />
    </div>
  );
}
