import { useAtom, useSetAtom } from "jotai";

import { hasCompletedAtom, stepAtom } from "../Form.atoms";
import { steps } from "../Form.constants";
import "./FormFooter.scss";

const FormFooter = () => {
  const [step, setStep] = useAtom(stepAtom);
  const setHasCompleted = useSetAtom(hasCompletedAtom);
  const lastStep = steps.length;

  return (
    <div className="flex form-footer">
      {step > 1 && (
        <button
          onClick={() => setStep((prev) => prev - 1)}
          type="button"
          className="back-btn"
        >
          Go Back
        </button>
      )}

      {step < lastStep && (
        <button
          onClick={() => setStep((prev) => prev + 1)}
          type="button"
          className="next-btn"
        >
          Next Step
        </button>
      )}

      {step === lastStep && (
        <button
          onClick={() => setHasCompleted(true)}
          type="button"
          className="confirm-btn"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default FormFooter;
