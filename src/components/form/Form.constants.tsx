import AddOns from "./subForms/addOnForm/AddOns";
import Summary from "./subForms/Summary";
import PersonalInfo from "./subForms/personalInfoForm/PersonalInfo";
import PlanSelection from "./subForms/planSelectionForm/PlanSelection";

export const steps = [
  <PersonalInfo />,
  <PlanSelection />,
  <AddOns />,
  <Summary />,
];
