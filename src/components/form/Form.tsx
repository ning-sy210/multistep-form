import { useAtomValue } from "jotai";

import FormFooter from "./formFooter/FormFooter";
import StepDisplay from "./stepDisplay/StepDisplay";
import SubscriptionConfirmation from "./subscriptionConfirmation/SubscriptionConfirmation";

import { hasCompletedAtom, stepAtom } from "./Form.atoms";
import { steps } from "./Form.constants";

import "./Form.scss";

const Form = () => {
  const step = useAtomValue(stepAtom);
  const hasCompleted = useAtomValue(hasCompletedAtom);

  return (
    <main className="stack">
      <StepDisplay numberOfSteps={steps.length} />

      {hasCompleted ? (
        <SubscriptionConfirmation />
      ) : (
        <>
          {steps[step - 1]}
          <FormFooter />
        </>
      )}
    </main>
  );
};

export default Form;
