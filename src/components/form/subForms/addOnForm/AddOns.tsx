import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimitiveAtom, useAtom } from "jotai";

import FormDesc from "../formDesc/FormDesc";

import { paymentPlanAtom } from "../planSelectionForm/PlanSelection.atoms";
import { PaymentPlan } from "../planSelectionForm/PlanSelection.constants";
import { AddOn, addOnOptions } from "./AddOns.constants";

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
  const [paymentPlan] = useAtom(paymentPlanAtom);

  const costLabel =
    paymentPlan === PaymentPlan.MONTHLY
      ? `${costPerMonth}/mo`
      : `${costPerMonth * (12 - freeMonthsInYearPlan)}/yr`;

  return (
    <section onClick={() => setSelected((prev) => !prev)} className="vc add-on">
      <div className={`custom-checkbox-ctn ${selected ? "selected" : ""}`}>
        <input type="checkbox" />
        <div className="hvc custom-checkbox">
          <FontAwesomeIcon icon={faCheck} size="xs" style={{ color: "#fff" }} />
        </div>
      </div>

      <div>
        <h2>{label}</h2>
        <p className="desc">{desc}</p>
      </div>
      <p className="cost-label">+${costLabel}</p>
    </section>
  );
};

export default AddOns;
