import { atom } from "jotai";
import { PlanOptionCoreProps } from "./PlanSelection";
import { PaymentBasis } from "./PlanSelection.constants";
import { getItemCost } from "../../Form.functions";

export const paymentBasisAtom = atom<PaymentBasis>(PaymentBasis.MONTHLY);
export const selectedPlanAtom = atom<PlanOptionCoreProps | null>(null);

export const selectedPlanCostReadAtom = atom((get) => {
  const selectedPlan = get(selectedPlanAtom);
  if (selectedPlan === null) return 0;

  const costPerMonth = selectedPlan.costPerMonth;
  const freeMonthsInYearPlan = selectedPlan.freeMonthsInYearPlan;
  return getItemCost(costPerMonth, get(paymentBasisAtom), freeMonthsInYearPlan);
});

export const isPlanSelectionFormValidatedReadAtom = atom(
  (get) => get(selectedPlanAtom) !== null
);
