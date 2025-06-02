import { create } from "zustand";

type SettingsModalStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useSettingsModalStore = create<SettingsModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
