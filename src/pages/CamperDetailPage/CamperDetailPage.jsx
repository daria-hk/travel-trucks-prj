import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMassage from "../../components/ErrorMassage/ErrorMassage.jsx";
import { getCamperId } from "../../redux/campersOps.js";
import {
  selectCamperDetail,
  selectIsLoading,
  selectError,
} from "../../redux/campersSlice.js";
import css from "./CamperDetailPage.module.css";
import clsx from "clsx";

import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";

export default function CamperDetailPage() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamperDetail);

  useEffect(() => {
    dispatch(getCamperId(id));
  }, [dispatch, id]);

  const buildLinkClass = useMemo(
    () =>
      ({ isActive }) =>
        clsx(css.link, isActive && css.active),
    [css.link, css.active]
  );

  const isFormVisible = useMemo(() => {
    return (
      location.pathname.includes("features") ||
      location.pathname.includes("reviews")
    );
  }, [location.pathname]);

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;

  return camper ? (
    <div className={css.camperPage}>
      <div className={css.wrapper}>
        <CamperCard camper={camper} />

        <div className={css.optionsContainer}>
          <div className={css.navigationsLinks}>
            <NavLink className={buildLinkClass} to="features">
              Features
            </NavLink>
            <NavLink className={buildLinkClass} to="reviews">
              Reviews
            </NavLink>
          </div>
          <div className={css.bottomCotainer}>
            <Outlet />
            {isFormVisible && (
              <div className={css.bookingForm}>
                <BookingForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>No camper details available.</p>
  );
}
