import { PrimitiveAtom, useAtom } from "jotai";
import FormDesc from "../formDesc/FormDesc";
import { emailAtom, nameAtom, phoneNumberAtom } from "./PersonalInfo.atoms";

import "./PersonalInfo.scss";

type PersonalInfoFormInputProps = {
  type: React.HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  atom: PrimitiveAtom<string>;
};

const PersonalInfoFormInputs: PersonalInfoFormInputProps[] = [
  {
    type: "text",
    label: "Name",
    placeholder: "e.g. Stephen King",
    atom: nameAtom,
  },
  {
    type: "email",
    label: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
    atom: emailAtom,
  },
  {
    type: "tel",
    label: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
    atom: phoneNumberAtom,
  },
];

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

const PersonalInfoFormInput = ({
  type,
  label,
  placeholder,
  atom,
}: PersonalInfoFormInputProps) => {
  const [value, setValue] = useAtom(atom);

  return (
    <div className="grid textbox-input">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PersonalInfo;
