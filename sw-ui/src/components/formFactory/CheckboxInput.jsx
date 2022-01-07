import React from "react";

export const CheckboxInput = ({ questionLabel, optionsLabel }) => {
  return (
    <>
      <div className="checkbox-input">
        <p className="checkbox-input__label">{questionLabel}</p>
        <br />
        <input type="checkbox" />
      </div>
    </>
  );
};
