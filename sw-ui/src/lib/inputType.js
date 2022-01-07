import { CheckboxInput } from "components/formFactory/CheckboxInput";
import { TextInput } from "components/formFactory/TextInput";

export const inputType = {
  CHECKBOX: "boolean",
  TEXT: "text",
};

export const inputFactory = {
  [inputType.CHECKBOX]: CheckboxInput,
  [inputType.TEXT]: TextInput,
};
