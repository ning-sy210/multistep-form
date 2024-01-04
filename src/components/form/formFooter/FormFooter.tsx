import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ScaleLoader } from "react-spinners";

import { hasCompletedAtom, stepAtom } from "../Form.atoms";
import { steps } from "../Form.constants";
import { pendingFormSubmissionAtom } from "./FormFooter.atoms";

import "./FormFooter.scss";

const FormFooter = () => {
  const [step, setStep] = useAtom(stepAtom);
  const currFormIsValidated = useAtomValue(steps[step - 1].validationAtom);
  const [loading, setLoading] = useAtom(pendingFormSubmissionAtom);
  const setHasCompletedEntireForm = useSetAtom(hasCompletedAtom);

  const lastStep = steps.length;

  function submitForm() {
    setLoading(true);
    setTimeout(() => {
      setHasCompletedEntireForm(true);
      setLoading(false);
    }, 3000);
  }

  return (
    <>
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
            disabled={!currFormIsValidated}
            type="button"
            className="next-btn"
          >
            Next Step
          </button>
        )}

        {step === lastStep && (
          <button onClick={submitForm} type="button" className="confirm-btn">
            Confirm
          </button>
        )}
      </div>

      {loading && (
        <div className="hvc overlay">
          <div className="hvc spinner-ctn">
            <ScaleLoader height={20} color="#473dff" speedMultiplier={0.75} />
          </div>
        </div>
      )}
    </>
  );
};

export default FormFooter;
