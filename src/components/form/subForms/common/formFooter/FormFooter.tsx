import { Atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { ScaleLoader } from "react-spinners";

import { hasCompletedEntireFormAtom, stepAtom } from "../../../Form.atoms";
import { steps } from "../../../Form.constants";
import {
  defaultFormValidationAtom,
  formDataAtom,
  pendingFormSubmissionAtom,
} from "./FormFooter.atoms";

import "./FormFooter.scss";

type FormFooterProps = {
  formValidationAtom?: Atom<boolean>;
};

const FormFooter = ({
  formValidationAtom = defaultFormValidationAtom,
}: FormFooterProps) => {
  const [step, setStep] = useAtom(stepAtom);
  const cannotProceedToNextStep = !useAtomValue(formValidationAtom);

  const [loading, setLoading] = useAtom(pendingFormSubmissionAtom);
  const setHasCompletedEntireForm = useSetAtom(hasCompletedEntireFormAtom);
  const formData = useAtomValue(formDataAtom);

  const lastStep = steps.length;

  function submitForm() {
    setLoading(true);
    setTimeout(() => {
      setHasCompletedEntireForm(true);
      setLoading(false);
      console.log("Form Data:", formData);
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
            disabled={cannotProceedToNextStep}
            type="button"
            className="next-btn"
          >
            Next Step
          </button>
        )}

        {step === lastStep && (
          <button
            onClick={submitForm}
            disabled={cannotProceedToNextStep}
            type="button"
            className="confirm-btn"
          >
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
