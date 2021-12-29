import { useState } from 'react';

export const useForm = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const resetFormValue = () => {
    setForm(initialValue);
  }

  return [form, handleInputChange, setForm, resetFormValue];
}
