import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  selectCamperDetail,
  selectError,
  selectIsLoading,
} from "../../redux/campersSlice";
import { getCamperId } from "../../redux/campersOps";
import { useEffect } from "react";
import css from "./CamperFeatures.module.css";
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
