import { PaymentBasis } from "./subForms/planSelectionForm/PlanSelection.constants";

export function getItemCost(
  costPerMonth: number,
  paymentBasis: PaymentBasis,
  freeMonthsInYearPlan: number = 0
): number {
  if (paymentBasis === PaymentBasis.MONTHLY) return costPerMonth;
  return costPerMonth * (12 - freeMonthsInYearPlan);
}

export function getPerMonthOrYearText(
  paymentBasis: PaymentBasis,
  truncated: boolean = true
) {
  if (paymentBasis === PaymentBasis.MONTHLY) {
    return truncated ? "/mo" : "per month";
  } else if (paymentBasis === PaymentBasis.YEARLY) {
    return truncated ? "/yr" : "per year";
  }
}
