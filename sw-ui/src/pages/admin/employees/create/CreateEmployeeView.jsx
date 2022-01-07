import React from "react";
import InputValidator from "components/InputValidator";
import { notEmptyValidator } from "lib/validations";
import InfoModal from "components/InfoModal";

function CreateEmployeeView({
  formValue,
  handleInputChange,
  validCb,
  isValid,
  handleSubmit,
  openInfoModal,
  setOpenInfoModal,
  error,
}) {
  const { fullName, nationalId, workRole } = formValue;

  return (
    <div className="employee-form-container">
      <h1>Registrar Nuevo Empleado</h1>
      <form className="employee-form">
        <InputValidator
          name="fullName"
          label="Nombre Completo *"
          type="text"
          value={fullName}
          onChange={handleInputChange}
          validator={notEmptyValidator}
          cb={validCb}
        />
        <InputValidator
          name="nationalId"
          label="Documento Identidad / Cédula *"
          type="number"
          value={nationalId}
          onChange={handleInputChange}
          validator={notEmptyValidator}
          cb={validCb}
        />
        <InputValidator
          name="workRole"
          label="Cargo *"
          type="text"
          value={workRole}
          onChange={handleInputChange}
          validator={notEmptyValidator}
          cb={validCb}
          validateOnChange={true}
        />
        {error.isSubmitError && <span className="employee-form--error">{error.message}</span>}
        <button className="button primary" disabled={!isValid} onClick={handleSubmit}>
          Registrar Usuario
        </button>
      </form>
      <InfoModal
        open={openInfoModal}
        onOpenChange={setOpenInfoModal}
        title="Registro Exitoso"
        description="Empleado se ha registrado exitosamente"
        isSuccess={true}
      />
    </div>
  );
}

export default CreateEmployeeView;
