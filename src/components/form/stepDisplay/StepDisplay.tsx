import { useAtom } from "jotai";
import "./StepDisplay.scss";
import { stepAtom } from "../Form.atoms";

type StepDisplayProps = {
  numberOfSteps: number;
};

const StepDisplay = ({ numberOfSteps }: StepDisplayProps) => {
  const [step] = useAtom(stepAtom);

  return (
    <div className="flex step-display">
      {Array.from(Array(numberOfSteps)).map((_, i) => (
        <div
          key={i}
          className={`hvc step-bubble ${i === step ? "selected" : ""}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default StepDisplay;
