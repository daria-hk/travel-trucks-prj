import { useSelector } from "react-redux";
import {
  selectCamperDetail,
  selectError,
  selectIsLoading,
} from "../../redux/campersSlice";
import css from "./CamperReviews.module.css";

export default function CamperReviews() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamperDetail);

  if (loading) return <Loader />;
  if (error) return <ErrorMassage />;

  return (
    <div className={css.reviews}>
      {camper.reviews.map((review, index) => (
        <div className={css.reviewWrapper} key={index}>
          <p className={css.revName}>{review.reviewer_name}</p>
          <p className={css.revRating}>{`Rating: ${review.reviewer_rating}`}</p>
          <p className={css.revComment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
