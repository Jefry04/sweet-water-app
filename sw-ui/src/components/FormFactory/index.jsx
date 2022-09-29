import React from "react";
import { inputFactory } from "lib/inputType";

const FormFactory = ({ data }) => {
  const handleFormSubmit = () => console.log("envie el formulario");

  return (
    <div className="container">
      <div className="form-container">
        <h2>{data?.name}</h2>
        <p>{data?.content?.formTitle}</p>
        <h4>{data?.content.formSubtitle}</h4>
        {data?.content?.questions?.map((question, idx) => {
          const InputForm = inputFactory[question.type];
          return <InputForm {...question} key={idx} />;
        })}
        <button className="forms-factory__submit button primary" onClick={handleFormSubmit}>
          Enviar formulario
        </button>
      </div>
    </div>
  );
};

export default FormFactory;
