import { useSelector } from "react-redux";
import {
  selectCamperDetail,
  selectError,
  selectIsLoading,
} from "../../redux/campersSlice";
import EquipmentChips from "../EquipmentChips/EquipmentChips";

export default function CamperFeatures() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamperDetail);

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;
  console.log(camper);

  return (
    <div>
      <EquipmentChips camper={camper} />
    </div>
  );
}
