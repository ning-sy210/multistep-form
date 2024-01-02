import { Atom, atom } from "jotai";

import AddOns from "./subForms/addOnForm/AddOns";
import Summary from "./subForms/summaryForm/Summary";
import PersonalInfo from "./subForms/personalInfoForm/PersonalInfo";
import PlanSelection from "./subForms/planSelectionForm/PlanSelection";

import { isPersonalInfoFormValidatedReadAtom } from "./subForms/personalInfoForm/PersonalInfo.atoms";

type Step = {
  component: JSX.Element;
  validationAtom: Atom<boolean>;
};

export const steps: Step[] = [
  {
    component: <PersonalInfo />,
    validationAtom: isPersonalInfoFormValidatedReadAtom,
  },
  {
    component: <PlanSelection />,
    validationAtom: atom(true),
  },
  {
    component: <AddOns />,
    validationAtom: atom(true),
  },
  {
    component: <Summary />,
    validationAtom: atom(true),
  },
];
