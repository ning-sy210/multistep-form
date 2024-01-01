import { useAtomValue, useSetAtom } from "jotai";
import { AddOnCoreProps } from "../addOnForm/AddOns";
import FormDesc from "../formDesc/FormDesc";

import { stepAtom } from "../../Form.atoms";
import { selectedAddOnsReadAtom } from "../addOnForm/AddOns.atoms";
import {
  planCostReadAtom,
  paymentPlanAtom,
  selectedPlanAtom,
} from "../planSelectionForm/PlanSelection.atoms";
import { PaymentPlan } from "../planSelectionForm/PlanSelection.constants";

import "./Summary.scss";

const Summary = () => {
  const setStep = useSetAtom(stepAtom);

  const paymentPlan = useAtomValue(paymentPlanAtom);
  const selectedPlan = useAtomValue(selectedPlanAtom);
  const selectedAddOns = useAtomValue(selectedAddOnsReadAtom);

  const planCost = useAtomValue(planCostReadAtom);
  const addOnsCost = selectedAddOns.reduce((acc, curr) => {
    return paymentPlan === PaymentPlan.MONTHLY
      ? acc + curr.costPerMonth
      : acc + curr.costPerMonth * (12 - (curr.freeMonthsInYearPlan ?? 0));
  }, 0);
  const totalCost = planCost + addOnsCost;

  const perMonthOrYearTextTruncated =
    paymentPlan === PaymentPlan.MONTHLY ? "/mo" : "/yr";
  const perMonthOrYearText =
    paymentPlan === PaymentPlan.MONTHLY ? "per month" : "per year";

  return (
    <section className="form summary-form">
      <FormDesc
        header="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="main">
        <div className="cost-breakdown">
          <div className="vcsb">
            <div>
              <p className="selected-plan">
                {selectedPlan?.label} ({paymentPlan})
              </p>
              <button
                onClick={() => setStep(1)}
                type="button"
                className="change-btn"
              >
                Change
              </button>
            </div>
            <p className="plan-cost">
              ${planCost}
              {perMonthOrYearTextTruncated}
            </p>
          </div>

          <div className="divider"></div>

          {selectedAddOns.map((addOn) => (
            <AddOn
              key={addOn.label}
              label={addOn.label}
              costPerMonth={addOn.costPerMonth}
              freeMonthsInYearPlan={addOn.freeMonthsInYearPlan}
            />
          ))}
        </div>

        <div className="vcsb total-cost-ctn">
          <p>Total ({perMonthOrYearText})</p>
          <p className="total-cost">
            ${totalCost}
            {perMonthOrYearTextTruncated}
          </p>
        </div>
      </div>
    </section>
  );
};

const AddOn = ({
  label,
  costPerMonth,
  freeMonthsInYearPlan = 0,
}: AddOnCoreProps) => {
  const paymentPlan = useAtomValue(paymentPlanAtom);

  const cost =
    paymentPlan === PaymentPlan.MONTHLY
      ? `${costPerMonth}/mo`
      : `${costPerMonth * (12 - freeMonthsInYearPlan)}/yr`;

  return (
    <div className="sb add-on">
      <p>{label}</p>
      <p className="add-on-cost">+${cost}</p>
    </div>
  );
};

export default Summary;
