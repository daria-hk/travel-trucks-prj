import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage.jsx";
import { getCamperId } from "../../redux/campersOps.js";
import {
  selectCamperDetail,
  selectIsLoading,
  selectError,
} from "../../redux/campersSlice.js";
import css from "./CamperDetailPage.module.css";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";

export default function CamperDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamperDetail);

  useEffect(() => {
    dispatch(getCamperId(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;

  return camper ? (
    <div className={css.camperPage}>
      <div className={css.wrapper}>
        <CamperCard camper={camper} />
        <div className={css.optionsContainer}>
          <Link to="features">Features</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <p>No camper details available.</p>
  );
}
