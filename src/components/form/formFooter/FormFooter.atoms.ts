import { atom } from "jotai";

import { selectedAddOnsReadAtom } from "../subForms/addOnForm/AddOns.atoms";
import { PersonalInfoFormInputs } from "../subForms/personalInfoForm/PersonalInfo.constants";
import { selectedPlanAtom } from "../subForms/planSelectionForm/PlanSelection.atoms";

export const pendingFormSubmissionAtom = atom(false);
export const completedFormAtom = atom((get) => {
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
