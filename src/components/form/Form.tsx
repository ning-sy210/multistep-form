import { useAtom } from "jotai";
import { stepAtom } from "./Form.atoms";

import FormFooter from "./formFooter/FormFooter";
import StepDisplay from "./stepDisplay/StepDisplay";

import AddOns from "./subForms/AddOns";
import PersonalInfo from "./subForms/personalInfoForm/PersonalInfo";
import PlanSelection from "./subForms/planSelectionForm/PlanSelection";
import Summary from "./subForms/Summary";

import "./Form.scss";

const Form = () => {
  const [step] = useAtom(stepAtom);
  const steps = [<PersonalInfo />, <PlanSelection />, <AddOns />, <Summary />];

  return (
    <main className="stack">
      <StepDisplay numberOfSteps={steps.length} />
      {steps[step]}
      <FormFooter />
    </main>
  );
};

export default Form;
