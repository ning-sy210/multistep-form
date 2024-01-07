import { atom } from "jotai";

import { selectedAddOnsReadAtom } from "../../addOnForm/AddOns.atoms";
import { PersonalInfoFormInputs } from "../../personalInfoForm/PersonalInfo.constants";
import { selectedPlanAtom } from "../../planSelectionForm/PlanSelection.atoms";

export const defaultFormValidationAtom = atom(true);
export const pendingFormSubmissionAtom = atom(false);

export const formDataAtom = atom((get) => {
  const personalInfo: { [key: string]: string } = {};
  PersonalInfoFormInputs.forEach(
    (input) => (personalInfo[input.label] = get(input.atom).value.trim())
  );

  const res = {
    personalInfo: personalInfo,
    selectedPlan: get(selectedPlanAtom),
    selectedAddOns: get(selectedAddOnsReadAtom),
  };

  return res;
});
