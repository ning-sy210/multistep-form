import { atom } from "jotai";
import { AddOnCoreProps } from "./AddOns";
import { AddOn, addOnOptions } from "./AddOns.constants";

// TODO: use atomWithToggle instead of atom
export const onlineServiceAtom = atom(false);
export const largerStorageAtom = atom(false);
export const customizableProfileAtom = atom(false);

export const selectedAddOnsReadAtom = atom<AddOnCoreProps[]>((get) => {
  const addOns: AddOnCoreProps[] = [];
  const mapping = {
    [AddOn.ONLINE_SERVICE]: onlineServiceAtom,
    [AddOn.LARGER_STORAGE]: largerStorageAtom,
    [AddOn.CUSTOMIZABLE_PROFILE]: customizableProfileAtom,
  };

  for (const [label, atom] of Object.entries(mapping)) {
    if (get(atom)) {
      const option = addOnOptions.find((option) => option.label === label);

      if (option) {
        const addOn = {
          label: option.label,
          costPerMonth: option.costPerMonth,
          freeMonthsInYearPlan: option.freeMonthsInYearPlan ?? 0,
        };
        addOns.push(addOn);
      }
    }
  }
  return addOns;
});
