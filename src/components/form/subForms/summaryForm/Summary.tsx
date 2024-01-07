import { useAtomValue, useSetAtom } from "jotai";

import { getItemCost, getPerMonthOrYearText } from "../../../../util/functions";
import { stepAtom } from "../../Form.atoms";
import { selectedAddOnsReadAtom } from "../addOnForm/AddOns.atoms";
import {
  paymentBasisAtom,
  selectedPlanAtom,
  selectedPlanCostReadAtom,
} from "../planSelectionForm/PlanSelection.atoms";

import { AddOnCoreProps } from "../addOnForm/AddOns";
import FormDesc from "../common/formDesc/FormDesc";
import FormFooter from "../common/formFooter/FormFooter";

import "./Summary.scss";

const Summary = () => {
  const setStep = useSetAtom(stepAtom);

  const paymentBasis = useAtomValue(paymentBasisAtom);
  const selectedPlan = useAtomValue(selectedPlanAtom);
  const selectedAddOns = useAtomValue(selectedAddOnsReadAtom);

  const planCost = useAtomValue(selectedPlanCostReadAtom);
  const addOnsCost = selectedAddOns.reduce(
    (acc, curr) =>
      acc +
      getItemCost(curr.costPerMonth, paymentBasis, curr.freeMonthsInYearPlan),
    0
  );
  const totalCost = planCost + addOnsCost;

  const perMonthOrYearText = getPerMonthOrYearText(paymentBasis, false);
  const perMonthOrYearTextTruncated = getPerMonthOrYearText(paymentBasis);

  return (
    <>
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
                  {selectedPlan?.label} ({paymentBasis})
                </p>
                <button
                  onClick={() => setStep(2)}
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

      <FormFooter />
    </>
  );
};

const AddOn = ({
  label,
  costPerMonth,
  freeMonthsInYearPlan = 0,
}: AddOnCoreProps) => {
  const paymentBasis = useAtomValue(paymentBasisAtom);

  return (
    <div className="sb add-on">
      <p>{label}</p>
      <p className="add-on-cost">
        +${getItemCost(costPerMonth, paymentBasis, freeMonthsInYearPlan)}
        {getPerMonthOrYearText(paymentBasis)}
      </p>
    </div>
  );
};

export default Summary;
