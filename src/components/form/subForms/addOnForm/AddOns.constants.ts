import { AddOnOptionProps } from "./AddOns";
import {
  customizableProfileAtom,
  largerStorageAtom,
  onlineServiceAtom,
} from "./AddOns.atoms";

export enum AddOn {
  ONLINE_SERVICE = "Online service",
  LARGER_STORAGE = "Larger storage",
  CUSTOMIZABLE_PROFILE = "Customizable profile",
}

export const addOnOptions: AddOnOptionProps[] = [
  {
    label: AddOn.ONLINE_SERVICE,
    desc: "Access to multiplayer games",
    costPerMonth: 1,
    freeMonthsInYearPlan: 2,
    atom: onlineServiceAtom,
  },
  {
    label: AddOn.LARGER_STORAGE,
    desc: "Extra 1TB of cloud save",
    costPerMonth: 2,
    freeMonthsInYearPlan: 2,
    atom: largerStorageAtom,
  },
  {
    label: AddOn.CUSTOMIZABLE_PROFILE,
    desc: "Custom theme on your profile",
    costPerMonth: 2,
    freeMonthsInYearPlan: 2,
    atom: customizableProfileAtom,
  },
];
