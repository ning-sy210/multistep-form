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
      {Array.from(Array(numberOfSteps)).map((_, i) => {
        const index = i + 1;
        return (
          <div
            key={index}
            onClick={() => setStep(index)}
            className={`hvc step-bubble ${index === step ? "selected" : ""}`}
          >
            {index}
          </div>
        );
      })}
    </div>
  );
};

export default StepDisplay;
