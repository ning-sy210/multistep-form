import { useAtom, useAtomValue } from "jotai";

import { getItemCost, getPerMonthOrYearText } from "../../../../util/functions";
import {
  isPlanSelectionFormValidatedReadAtom,
  paymentBasisAtom,
  selectedPlanAtom,
} from "./PlanSelection.atoms";
import { PaymentBasis } from "./PlanSelection.constants";

import FormDesc from "../common/formDesc/FormDesc";
import FormFooter from "../common/formFooter/FormFooter";

import AdvancedIcon from "/images/icon-advanced.svg";
import ArcadeIcon from "/images/icon-arcade.svg";
import ProIcon from "/images/icon-pro.svg";

import "./PlanSelection.scss";

export type PlanOptionCoreProps = {
  label: string;
  costPerMonth: number;
  freeMonthsInYearPlan?: number;
};

type PlanOptionProps = {
  icon: string;
} & PlanOptionCoreProps;

const PlanOptions: PlanOptionProps[] = [
  {
    icon: ArcadeIcon,
    label: "Arcade",
    costPerMonth: 9,
    freeMonthsInYearPlan: 2,
  },
  {
    icon: AdvancedIcon,
    label: "Advanced",
    costPerMonth: 12,
    freeMonthsInYearPlan: 2,
  },
  {
    icon: ProIcon,
    label: "Pro",
    costPerMonth: 15,
    freeMonthsInYearPlan: 2,
  },
];

const PlanSelection = () => {
  const paymentBasis = useAtomValue(paymentBasisAtom);
  const monthlyPlanLabelClass =
    paymentBasis === PaymentBasis.MONTHLY ? "selected" : "";
  const yearlyPlanLabelClass =
    paymentBasis === PaymentBasis.YEARLY ? "selected" : "";

  return (
    <>
      <form className="form stack">
        <FormDesc
          header="Select your plan"
          description="You have the option of monthly or yearly billing."
        />

        <div className="plan-options-ctn">
          {PlanOptions.map((option) => (
            <PlanOption
              key={option.label}
              icon={option.icon}
              label={option.label}
              costPerMonth={option.costPerMonth}
              freeMonthsInYearPlan={option.freeMonthsInYearPlan}
            />
          ))}
        </div>

        <div className="hvc payment-basis-selector">
          <p className={`plan-option-label ${monthlyPlanLabelClass}`}>
            Monthly
          </p>
          <PlanToggle />
          <p className={`plan-option-label ${yearlyPlanLabelClass}`}>Yearly</p>
        </div>
      </form>

      <FormFooter formValidationAtom={isPlanSelectionFormValidatedReadAtom} />
    </>
  );
};

const PlanOption = ({
  icon,
  label,
  costPerMonth,
  freeMonthsInYearPlan = 0,
}: PlanOptionProps) => {
  const paymentBasis = useAtomValue(paymentBasisAtom);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom);
  const planCost = getItemCost(
    costPerMonth,
    paymentBasis,
    freeMonthsInYearPlan
  );

  const selectedClass = selectedPlan?.label === label ? "selected" : "";
  const planCostText = `$${planCost}${getPerMonthOrYearText(paymentBasis)}`;

  function onClick() {
    if (selectedClass) return;
    setSelectedPlan({ label, costPerMonth, freeMonthsInYearPlan });
  }

  return (
    <section
      onClick={onClick}
      className={`flex-align-start plan-option ${selectedClass}`}
    >
      <img src={icon} title={`${label} icon`} alt={`${label} icon`} />
      <div className="grid text-ctn">
        <h2>{label}</h2>
        <p className="plan-cost">{planCostText}</p>

        {paymentBasis === PaymentBasis.YEARLY && (
          <p className="free-months-label">
            {freeMonthsInYearPlan} months free
          </p>
        )}
      </div>
    </section>
  );
};

const PlanToggle = () => {
  const [paymentPlan, setPaymentPlan] = useAtom(paymentBasisAtom);

  function togglePaymentPlan() {
    if (paymentPlan === PaymentBasis.MONTHLY) {
      setPaymentPlan(PaymentBasis.YEARLY);
    } else {
      setPaymentPlan(PaymentBasis.MONTHLY);
    }
  }

  return (
    <button
      onClick={togglePaymentPlan}
      type="button"
      className="vc payment-basis-toggle"
    >
      <span className={`toggle-btn ${paymentPlan.toLowerCase()}`}></span>
    </button>
  );
};

export default PlanSelection;
