import React from "react";
import css from "./CamperCard.module.css";
import iconSvg from "../../assets/icons.svg";

const CamperCard = ({ camper }) => {
  return (
    <div className={css.camperComponent}>
      <p className={css.headline}>{camper.name}</p>
      <div className={css.subHeadline}>
        <p className={css.reviews}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-star-yellow`} />
          </svg>

          {`${camper.rating}(${camper.reviews.length}) Reviews`}
        </p>
        <p className={css.location}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-map`} />
          </svg>
          {camper.location}
        </p>
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
      <p className={css.description}>{`${camper.description}`}</p>
    </div>
  );
};

export default CamperCard;
