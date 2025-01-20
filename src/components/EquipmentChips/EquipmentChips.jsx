import React from "react";
import css from "./EquipmentChips.module.css";
import iconSvg from "../../assets/icons.svg";

const EquipmentChips = ({ camper }) => {
  return (
    <div className={css.equipment}>
      {camper.kitchen && (
        <p className={`${css.kitchenTile} ${css.equipmentTile}`}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-cup-hot`} />
          </svg>
          Kitchen
        </p>
      )}
      {camper.transmission === "automatic" && (
        <p className={`${css.transmissionTile} ${css.equipmentTile}`}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-diagram`} />
          </svg>
          Automatic
        </p>
      )}
      {camper.AC && (
        <p className={`${css.acTile} ${css.equipmentTile}`}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-wind`} />
          </svg>
          AC
        </p>
      )}
      {camper.bathroom && (
        <p className={`${css.bathroomTile} ${css.equipmentTile}`}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-ph_shower`} />
          </svg>
          Bathroom
        </p>
      )}
      {camper.TV && (
        <p className={`${css.tvTile} ${css.equipmentTile}`}>
          <svg
            style={{
              width: "16px",
              height: "16px",
            }}
          >
            <use href={`${iconSvg}#icon-tv`} />
          </svg>
          TV
        </p>
      )}
      {camper.engine === "petrol" && (
        <p className={`${css.engineTole} ${css.equipmentTile}`}>Petrol</p>
      )}
    </div>
  );
};

export default EquipmentChips;
