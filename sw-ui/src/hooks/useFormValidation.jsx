// Receives an object with the inputs to validate and returns
// a callback function that changes the state depending on the
// validation logic implemented elsewhere.
// It will return isValid when all the object properties are true.
import { useCallback, useEffect, useState } from "react";

export const useFormValidation = (initialValue = {}) => {
  const [isValid, setIsValid] = useState(false);
  const [validForm, setValidForm] = useState(initialValue);

  useEffect(() => {
    setIsValid(Object.values(validForm).every((value) => value === true));
  }, [validForm]);

  const setValidObj = useCallback((validObj) => {
    setValidForm((validForm) => {
      return {
        ...validForm,
        ...validObj,
      };
    });
  }, []);

  const resetFormValidation = () => {
    setValidForm(initialValue);
  };

  return {
    isValid,
    resetFormValidation,
    setValidObj,
  };
};
