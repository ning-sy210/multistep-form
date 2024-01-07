import AddOns from "./subForms/addOnForm/AddOns";
import PersonalInfo from "./subForms/personalInfoForm/PersonalInfo";
import PlanSelection from "./subForms/planSelectionForm/PlanSelection";
import Summary from "./subForms/summaryForm/Summary";

type Step = {
  label: string;
  component: JSX.Element;
};

export const steps: Step[] = [
  {
    label: "Your Info",
    component: <PersonalInfo />,
  },
  {
    label: "Select Plan",
    component: <PlanSelection />,
  },
  {
    label: "Add-ons",
    component: <AddOns />,
  },
  {
    label: "Summary",
    component: <Summary />,
  },
];
