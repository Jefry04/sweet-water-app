import React from "react";

export const TextInput = ({ questionLabel }) => {
  return (
    <>
      <div className="text-input">
        <label>{questionLabel}</label>
        <input type="text" className="input" />
      </div>
    </>
  );
};
