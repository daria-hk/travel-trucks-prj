import React from "react";
import css from "./EquipmentChips.module.css";

const EquipmentChips = ({ camper }) => {
  return (
    <div className={css.equipment}>
      {camper.kitchen && (
        <p className={`${css.kitchenTile} ${css.equipmentTile}`}>Kitchen</p>
      )}
      {camper.transmission === "automatic" && (
        <p className={`${css.transmissionTile} ${css.equipmentTile}`}>
          Automatic
        </p>
      )}
      {camper.AC && <p className={`${css.acTile} ${css.equipmentTile}`}>AC</p>}
      {camper.bathroom && (
        <p className={`${css.bathroomTile} ${css.equipmentTile}`}>Bathroom</p>
      )}
      {camper.TV && <p className={`${css.tvTile} ${css.equipmentTile}`}>TV</p>}
      {camper.engine === "petrol" && (
        <p className={`${css.engineTole} ${css.equipmentTile}`}>Petrol</p>
      )}
    </div>
  );
};

export default EquipmentChips;
