import { useAtomValue } from "jotai";

import { hasCompletedEntireFormAtom, stepAtom } from "./Form.atoms";
import { steps } from "./Form.constants";

import StepDisplay from "./stepDisplay/StepDisplay";
import SubscriptionConfirmation from "./subscriptionConfirmation/SubscriptionConfirmation";

import "./Form.scss";

const Form = () => {
  const step = useAtomValue(stepAtom);
  const hasCompleted = useAtomValue(hasCompletedEntireFormAtom);

  return (
    <main className="stack">
      <StepDisplay numberOfSteps={steps.length} />
      {hasCompleted ? <SubscriptionConfirmation /> : steps[step - 1]}
    </main>
  );
};

export default Form;
