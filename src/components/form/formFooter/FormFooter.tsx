import { useAtom } from "jotai";
import { stepAtom } from "../Form.atoms";

import { steps } from "../Form.constants";
import "./FormFooter.scss";

const FormFooter = () => {
  const [step, setStep] = useAtom(stepAtom);
  const lastStep = steps.length - 1;

  return (
    <div className="flex form-footer">
      {step > 0 && (
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
        <button type="button" className="confirm-btn">
          Confirm
        </button>
      )}
    </div>
  );
};

export default FormFooter;
