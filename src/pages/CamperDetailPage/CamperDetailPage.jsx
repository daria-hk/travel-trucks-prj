import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage.jsx";
import { getCamperId } from "../../redux/campersOps.js";
import {
  selectCamperDetail,
  selectIsLoading,
  selectError,
} from "../../redux/campersSlice.js";

export default function CamperDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamperDetail);

  useEffect(() => {
    dispatch(getCamperId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (camper) {
      console.log("Camper-Daten:", camper);
    }
  }, [camper]);

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;

  return camper ? (
    <div>
      <h1>{camper.name}</h1>
      <p>{`Price: €${parseFloat(camper.price).toFixed(2)}`}</p>
      <p>{`Description: ${camper.description}`}</p>
    </div>
  ) : (
    <p>No camper details available.</p>
  );
}
