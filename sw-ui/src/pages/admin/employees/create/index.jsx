import React, { useState } from "react";
import CreateEmployeeView from "./CreateEmployeeView";
import { useForm } from "hooks/useForm";
import { useFormValidation } from "hooks/useFormValidation";

function CreateEmployee() {
  const [formValue, handleInputChange, , resetFormValue] = useForm({
    fullName: "",
    nationalId: "",
    workRole: "",
  });
  const { setValidObj, isValid, resetFormValidation } = useFormValidation({
    fullName: false,
    nationalId: false,
    workRole: false,
  });
  const [openInfoModal, setOpenInfoModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetFormValue();
    resetFormValidation();
    setOpenInfoModal(true);
  };

  const viewProps = {
    formValue,
    handleInputChange,
    handleSubmit,
    isValid,
    validCb: setValidObj,
    openInfoModal,
    setOpenInfoModal,
  };

  return <CreateEmployeeView {...viewProps} />;
}

export default CreateEmployee;
