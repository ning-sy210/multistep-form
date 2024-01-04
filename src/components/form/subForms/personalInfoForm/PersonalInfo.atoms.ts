import { atom } from "jotai";
import { PersonalInfoFormInputs } from "./PersonalInfo.constants";

export type TextInput = {
  value: string;
  touched: boolean;
  error?: string;
};

export const nameAtom = atom<TextInput>({ value: "", touched: false });
export const emailAtom = atom<TextInput>({ value: "", touched: false });
export const phoneNumberAtom = atom<TextInput>({ value: "", touched: false });

export const isPersonalInfoFormValidatedReadAtom = atom((get) => {
  return !PersonalInfoFormInputs.some((input) => {
    const atom = get(input.atom);
    return atom.error || !atom.touched;
  });
});
