import { atom } from "jotai";
import { PaymentPlan, Plan } from "./PlanSelection.constants";

export const paymentPlanAtom = atom<PaymentPlan>(PaymentPlan.MONTHLY);
export const selectedPlanAtom = atom<Plan | null>(null);
