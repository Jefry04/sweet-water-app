import React from "react";
import { inputFactory } from "lib/inputType";

const FormFactory = ({ data }) => {
  const handleFormSubmit = () => console.log("envie el formulario");
  return (
    <div className="container">
      <div className="form-container">
        <h3>Formato #{data.formId}</h3>
        <br />
        <p>{data.formTitle}</p>
        <br />
        <h4>{data.formSubtitle}</h4>
        <br />
        {data.questions.map((question, idx) => {
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
