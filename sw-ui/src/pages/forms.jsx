import React from "react";
import { FormFactory } from "components/formFactory/FormFactory";

const mockDataForm = {
  formId: 1,
  formTitle:
    "FORMATO Y REGISTRO DE LIMPIEZA Y DESINFECCION DE BANDA TRANSPORTADORA MAQUINA  DE FABRICACION BOLSA X 6 LITROS",
  formSubtitle: "actividades a realizar",
  questions: [
    {
      id: 1,
      questionLabel: "lave la banda con solucion detergente y cepillo",
      optionsLabel: "Realizó:",
      type: "boolean",
    },
    {
      id: 2,
      questionLabel: "Enjuague la superficie de la banda con toalla desechable",
      optionsLabel: "Cumple:",
      type: "boolean",
    },
    {
      id: 3,
      questionLabel: "seque la superficie de la banda con toalla desechable",
      optionsLabel: "Realizó:",
      type: "boolean",
    },
    {
      id: 4,
      questionLabel:
        "desinfecte las superficies asperjando solucion de amonio cuaternario de 200 ppm o solucion de cloroz al 10% V/V",
      optionsLabel: "Realizó:",
      type: "boolean",
    },
    {
      id: 5,
      questionLabel: "Observaciones",
      optionsLabel: "Realizó:",
      type: "text",
    },
  ],
};

const forms = () => {
  return <FormFactory data={mockDataForm} />;
};

export default forms;
