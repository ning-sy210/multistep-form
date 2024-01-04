import { PersonalInfoFormInputProps } from "./PersonalInfo";
import { emailAtom, nameAtom, phoneNumberAtom } from "./PersonalInfo.atoms";

export const PersonalInfoFormInputs: PersonalInfoFormInputProps[] = [
  {
    type: "text",
    label: "Name",
    placeholder: "e.g. Stephen King",
    atom: nameAtom,
  },
  {
    type: "email",
    label: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
    atom: emailAtom,
  },
  {
    type: "tel",
    label: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
    atom: phoneNumberAtom,
  },
];

export enum InputValidationError {
  REQUIRED = "This field is required",
  ALL_WHITESPACE = "Cannot contain only whitespaces",
  INVALID_FORMAT = "Invalid format",
}
