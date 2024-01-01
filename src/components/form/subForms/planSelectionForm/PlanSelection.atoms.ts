import { atom } from "jotai";
import { PlanOptionCoreProps } from "./PlanSelection";
import { PaymentPlan } from "./PlanSelection.constants";

export const paymentPlanAtom = atom<PaymentPlan>(PaymentPlan.MONTHLY);
export const selectedPlanAtom = atom<PlanOptionCoreProps | null>(null);

export const planCostReadAtom = atom((get) => {
  const planCostPerMonth = get(selectedPlanAtom)?.costPerMonth ?? 0;
  const freeMonthsInYearPlan = get(selectedPlanAtom)?.freeMonthsInYearPlan ?? 0;

  return get(paymentPlanAtom) === PaymentPlan.MONTHLY
    ? planCostPerMonth
    : planCostPerMonth * (12 - freeMonthsInYearPlan);
});
