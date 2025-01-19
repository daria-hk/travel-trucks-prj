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
import css from "./CamperDetailPage.module.css";

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
  console.log(camper);

  return camper ? (
    <div className={css.camperPage}>
      <div className={css.camperComponent}>
        <p className={css.headline}>{camper.name}</p>
        <div className={css.subHeadline}>
          <p
            className={css.reviews}
          >{`${camper.rating}(${camper.reviews.length}) Reviews`}</p>
          <p className={css.location}>{camper.location}</p>
        </div>
        <p className={css.price}>{`€${parseFloat(camper.price).toFixed(2)}`}</p>
        <div className={css.gallery}>
          {camper.gallery.map((photo, index) => (
            <img
              key={index}
              src={photo.thumb}
              alt={`Camper photo ${index + 1}`}
              className={css.galleryImage}
            />
          ))}
        </div>
        <p>{`Description: ${camper.description}`}</p>
      </div>
    </div>
  ) : (
    <p>No camper details available.</p>
  );
}
