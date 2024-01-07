import { atom } from "jotai";
import { PersonalInfoFormInputs } from "./PersonalInfo.constants";

export type TextInput = {
  value: string;
  error?: string;
};

export const nameAtom = atom<TextInput>({ value: "" });
export const emailAtom = atom<TextInput>({ value: "" });
export const phoneNumberAtom = atom<TextInput>({ value: "" });

export const isPersonalInfoFormValidatedReadAtom = atom((get) => {
  return PersonalInfoFormInputs.every((input) => {
    const inputAtom = get(input.atom);
    return inputAtom.value.trim() && !inputAtom.error;
  });
});
