import { useAtom } from "jotai";
import { stepAtom } from "../Form.atoms";

import "./StepDisplay.scss";

type StepDisplayProps = {
  numberOfSteps: number;
};

const StepDisplay = ({ numberOfSteps }: StepDisplayProps) => {
  const [step, setStep] = useAtom(stepAtom);

  return (
    <div className="flex step-display">
      {Array.from(Array(numberOfSteps)).map((_, i) => (
        <div
          key={i}
          onClick={() => setStep(i)}
          className={`hvc step-bubble ${i === step ? "selected" : ""}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default StepDisplay;
