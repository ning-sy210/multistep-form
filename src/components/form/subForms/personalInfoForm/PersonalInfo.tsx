import { PrimitiveAtom, useAtom } from "jotai";

import {
  TextInput,
  isPersonalInfoFormValidatedReadAtom,
} from "./PersonalInfo.atoms";
import { PersonalInfoFormInputs } from "./PersonalInfo.constants";
import { getErrorMessage } from "./PersonalInfo.functions";

import FormDesc from "../common/formDesc/FormDesc";
import FormFooter from "../common/formFooter/FormFooter";

import "./PersonalInfo.scss";

const PersonalInfo = () => {
  return (
    <>
      <form className="form">
        <FormDesc
          header="Personal info"
          description="Please provide your name, email address, and phone number."
        />

        {PersonalInfoFormInputs.map((input) => (
          <PersonalInfoFormInput
            key={input.label}
            type={input.type}
            label={input.label}
            placeholder={input.placeholder}
            atom={input.atom}
          />
        ))}
      </form>

      <FormFooter formValidationAtom={isPersonalInfoFormValidatedReadAtom} />
    </>
  );
};

export type PersonalInfoFormInputProps = {
  type: React.HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  atom: PrimitiveAtom<TextInput>;
};

const PersonalInfoFormInput = ({
  type,
  label,
  placeholder,
  atom,
}: PersonalInfoFormInputProps) => {
  const [field, setField] = useAtom(atom);
  const inputId = `${label}-input`;

  function validateInput() {
    const error = getErrorMessage(inputId, field);
    if (!error) return;
    setField({ ...field, error: error });
  }

  return (
    <div className="grid textbox-input">
      <div className="vcsb label-error-ctn">
        <label htmlFor={inputId}>{label}</label>
        {field.error && <p className="error">{field.error}</p>}
      </div>
      <input
        required
        id={inputId}
        value={field.value}
        onChange={(e) => setField({ value: e.target.value })}
        onBlur={validateInput}
        type={type}
        placeholder={placeholder}
        className={field.error ? "invalid" : ""}
      />
    </div>
  );
};

export default PersonalInfo;
