import React from "react";
import FormFactory from "components/FormFactory";
import { useUser } from "hooks/useUser";
import withAuth from "lib/HOC/withAuth";

const mockDataForm = {
  formId: 1,
  formTitle:
    "Formato y registro de limpieza y desinfeccion de banda transportadora maquina de fabriación bolsa X 6 litros",
  formSubtitle: "Actividades a realizar",
  questions: [
    {
      id: 1,
      questionLabel: "Lave la banda con solucion detergente y cepillo",
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
      questionLabel: "Seque la superficie de la banda con toalla desechable",
      optionsLabel: "Realizó:",
      type: "boolean",
    },
    {
      id: 4,
      questionLabel:
        "Desinfecte las superficies asperjando solucion de amonio cuaternario de 200 ppm o solucion de cloroz al 10% V/V",
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

const Forms = () => {
  return <FormFactory data={mockDataForm} />;
};

export default withAuth(Forms);
