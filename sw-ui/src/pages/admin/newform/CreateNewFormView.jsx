import InputValidator from "components/InputValidator";
import { usernameValidator } from "lib/validations";

const CreateNewFormView = ({ formValue = {}, handleInputChange, validCb, signupError }) => {
  const { name, firstName, lastName, password, roles } = formValue;

  return (
    <div className="container">
      <div className="new-form-container">
        <h1> Crear Nuevo Formulario</h1>
        <form className="new-form"></form>
        <InputValidator
          name="name"
          label="Nombre del formulario *"
          type="text"
          value={name}
          onChange={handleInputChange}
          validator={usernameValidator}
          cb={validCb}
          externalError={signupError}
        />
      </div>
    </div>
  );
};

export default CreateNewFormView;
