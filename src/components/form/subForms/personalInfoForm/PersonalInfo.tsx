import { PrimitiveAtom, useAtom } from "jotai";
import FormDesc from "../formDesc/FormDesc";

import { TextInput } from "./PersonalInfo.atoms";
import { PersonalInfoFormInputs } from "./PersonalInfo.constants";
import { getErrorMessage } from "./PersonalInfo.functions";

import "./PersonalInfo.scss";

const PersonalInfo = () => {
  return (
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

  function onFocus() {
    if (field.touched) return;
    setField({ ...field, touched: true });
  }

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
        onFocus={onFocus}
        onChange={(e) =>
          setField({ value: e.target.value, touched: field.touched })
        }
        onBlur={validateInput}
        type={type}
        placeholder={placeholder}
        className={field.error ? "invalid" : ""}
      />
    </div>
  );
};

export default PersonalInfo;
