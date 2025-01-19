import React from "react";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  return (
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
      <p className={css.description}>{`${camper.description}`}</p>
    </div>
  );
};

export default CamperCard;
