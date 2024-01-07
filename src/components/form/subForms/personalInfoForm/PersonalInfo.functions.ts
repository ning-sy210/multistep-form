import { TextInput } from "./PersonalInfo.atoms";
import { InputValidationError } from "./PersonalInfo.constants";

export function getErrorMessage(
  inputId: string,
  field: TextInput
): string | undefined {
  if (field.value.length === 0) {
    return field.error === InputValidationError.REQUIRED
      ? undefined
      : InputValidationError.REQUIRED;
  }

  if (field.value.trim().length === 0) {
    return field.error === InputValidationError.ALL_WHITESPACE
      ? undefined
      : InputValidationError.ALL_WHITESPACE;
  }

  const e = document.getElementById(inputId);
  if (!(e instanceof HTMLInputElement)) return;

  if (!e.checkValidity()) {
    return field.error === InputValidationError.INVALID_FORMAT
      ? undefined
      : InputValidationError.INVALID_FORMAT;
  }
  return;
}
