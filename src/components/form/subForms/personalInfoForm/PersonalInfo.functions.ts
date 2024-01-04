import { TextInput } from "./PersonalInfo.atoms";
import { InputValidationError } from "./PersonalInfo.constants";

export function getErrorMessage(
  inputId: string,
  field: TextInput
): string | undefined {
  if (field.value.length === 0) {
    if (field.error === InputValidationError.REQUIRED) return;
    return InputValidationError.REQUIRED;
  }

  if (field.value.trim().length === 0) {
    if (field.error === InputValidationError.ALL_WHITESPACE) return;
    return InputValidationError.ALL_WHITESPACE;
  }

  const e = document.getElementById(inputId);
  if (!(e instanceof HTMLInputElement)) return;

  if (!e.checkValidity()) {
    if (field.error === InputValidationError.INVALID_FORMAT) return;
    return InputValidationError.INVALID_FORMAT;
  }

  return;
}
