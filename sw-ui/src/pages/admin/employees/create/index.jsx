import React, { useState } from "react";
import CreateEmployeeView from "./CreateEmployeeView";
import { useForm } from "hooks/useForm";
import { useFormValidation } from "hooks/useFormValidation";
import { saveEmployee } from "lib/services/employee";
import { getErrorMessage } from "lib/getErrorMessage";
import withAuth from "lib/HOC/withAuth";
import { NoAccessView } from "components/NoAccessView";

function CreateEmployee({ user }) {
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
  const [error, setError] = useState({
    isSubmitError: false,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEmployee(formValue)
      .then((res) => {
        if (res.success) {
          resetFormValue();
          resetFormValidation();
          setError({
            isSubmitError: false,
            message: "",
          });
          setOpenInfoModal(true);
        } else {
          setError({
            isSubmitError: true,
            message: getErrorMessage(res.errMsg),
          });
        }
      })
      .catch(console.error);
  };

  const viewProps = {
    formValue,
    handleInputChange,
    handleSubmit,
    isValid,
    validCb: setValidObj,
    openInfoModal,
    setOpenInfoModal,
    error,
  };

  return <>{user.isAdmin ? <CreateEmployeeView {...viewProps} /> : <NoAccessView />}</>;
}

export default withAuth(CreateEmployee);
