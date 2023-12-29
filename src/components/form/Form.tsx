import { useAtom } from "jotai";
import { stepAtom } from "./Form.atoms";

import { steps } from "./Form.constants";
import FormFooter from "./formFooter/FormFooter";
import StepDisplay from "./stepDisplay/StepDisplay";

import "./Form.scss";

const Form = () => {
  const [step] = useAtom(stepAtom);

  return (
    <main className="stack">
      <StepDisplay numberOfSteps={steps.length} />
      {steps[step]}
      <FormFooter />
    </main>
  );
};

export default Form;
