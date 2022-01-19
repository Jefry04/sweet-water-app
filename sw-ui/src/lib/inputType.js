import { CheckboxInput } from "components/FormFactory/CheckboxInput";
import { TextInput } from "components/FormFactory/TextInput";

export const inputType = {
  CHECKBOX: "boolean",
  TEXT: "text",
};

export const inputFactory = {
  [inputType.CHECKBOX]: CheckboxInput,
  [inputType.TEXT]: TextInput,
};
