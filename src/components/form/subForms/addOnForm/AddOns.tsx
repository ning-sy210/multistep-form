import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";

import { getItemCost, getPerMonthOrYearText } from "../../../../util/functions";
import { paymentBasisAtom } from "../planSelectionForm/PlanSelection.atoms";
import { AddOn, addOnOptions } from "./AddOns.constants";

import FormDesc from "../common/formDesc/FormDesc";
import FormFooter from "../common/formFooter/FormFooter";

import "./AddOns.scss";

export type AddOnCoreProps = {
  label: AddOn;
  costPerMonth: number;
  freeMonthsInYearPlan?: number;
};

export type AddOnOptionProps = AddOnCoreProps & {
  desc: string;
  atom: PrimitiveAtom<boolean>;
};

const AddOns = () => {
  return (
    <>
      <form className="form add-on-form">
        <FormDesc
          header="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />

        {addOnOptions.map((addOn) => (
          <AddOnOption
            key={addOn.label}
            label={addOn.label}
            desc={addOn.desc}
            costPerMonth={addOn.costPerMonth}
            freeMonthsInYearPlan={addOn.freeMonthsInYearPlan}
            atom={addOn.atom}
          />
        ))}
      </form>

      <FormFooter />
    </>
  );
};

const AddOnOption = ({
  label,
  desc,
  costPerMonth,
  freeMonthsInYearPlan = 0,
  atom,
}: AddOnOptionProps) => {
  const [selected, setSelected] = useAtom(atom);
  const paymentBasis = useAtomValue(paymentBasisAtom);

  const addOnCost = `+$${getItemCost(
    costPerMonth,
    paymentBasis,
    freeMonthsInYearPlan
  )}${getPerMonthOrYearText(paymentBasis)}`;

  return (
    <section onClick={() => setSelected((prev) => !prev)} className="vc add-on">
      <div className={`custom-checkbox-ctn ${selected ? "selected" : ""}`}>
        <input type="checkbox" />
        <div className="hvc custom-checkbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="9"
            viewBox="0 0 12 9"
          >
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth={2}
              d="m1 4 3.433 3.433L10.866 1"
            />
          </svg>
        </div>
      </div>

      <div>
        <h2>{label}</h2>
        <p className="desc">{desc}</p>
      </div>
      <p className="add-on-cost">{addOnCost}</p>
    </section>
  );
};

export default AddOns;
