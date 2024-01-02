import { useAtom, useAtomValue } from "jotai";

import FormDesc from "../formDesc/FormDesc";
import { paymentPlanAtom, selectedPlanAtom } from "./PlanSelection.atoms";
import { PaymentPlan } from "./PlanSelection.constants";

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
  return (
    <form className="form stack">
      <FormDesc
        header="Select your plan"
        description="You have the option of monthly or yearly billing."
      />

      <div className="grid options-ctn">
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

      <PaymentPlanToggle />
    </form>
  );
};

const PlanOption = ({
  icon,
  label,
  costPerMonth,
  freeMonthsInYearPlan = 0,
}: PlanOptionProps) => {
  const paymentPlan = useAtomValue(paymentPlanAtom);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom); // TODO: form validation for empty selection
  const selectedClass = selectedPlan?.label === label ? "selected" : "";

  const costLabel =
    paymentPlan === PaymentPlan.MONTHLY
      ? `$${costPerMonth}/mo`
      : `$${costPerMonth * (12 - freeMonthsInYearPlan)}/yr`;

  return (
    <section
      onClick={() =>
        setSelectedPlan({ label, costPerMonth, freeMonthsInYearPlan })
      }
      className={`flex-align-start plan-option ${selectedClass}`}
    >
      <img src={icon} title={`${label} icon`} alt={`${label} icon`} />
      <div className="grid text-ctn">
        <h2>{label}</h2>
        <p className="cost-label">{costLabel}</p>

        {paymentPlan === PaymentPlan.YEARLY && (
          <p className="free-months-label">
            {freeMonthsInYearPlan} months free
          </p>
        )}
      </div>
    </section>
  );
};

const PaymentPlanToggle = () => {
  const [paymentPlan, setPaymentPlan] = useAtom(paymentPlanAtom);

  function togglePaymentPlan() {
    if (paymentPlan === PaymentPlan.MONTHLY) {
      setPaymentPlan(PaymentPlan.YEARLY);
    } else {
      setPaymentPlan(PaymentPlan.MONTHLY);
    }
  }

  return (
    <div className="hvc payment-plan-selector">
      <p className="month-option-label">Monthly</p>

      {/* TODO: consider changing to <button> / <input> */}
      <div onClick={togglePaymentPlan} className="vc payment-plan-toggle">
        <div className={`toggle-btn ${paymentPlan.toLowerCase()}`}></div>
      </div>
      <p className="year-option-label">Yearly</p>
    </div>
  );
};

export default PlanSelection;
