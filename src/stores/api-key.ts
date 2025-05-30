import { create } from "zustand";
import { useEffect } from "react";

type ApiKeyStore = {
  apiKey: string;
  setApiKey: (apiKey: string) => void;
};

const useApiKeyStore = create<ApiKeyStore>((set) => ({
  apiKey: "",
  setApiKey: (apiKey) => {
    set({ apiKey });
    if (typeof window !== "undefined") {
      localStorage.setItem("apiKey", apiKey);
    }
  },
}));

export function useSyncApiKeyFromLocalStorage() {
  const setApiKey = useApiKeyStore((state) => state.setApiKey);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const apiKey = localStorage.getItem("apiKey") || "";
      setApiKey(apiKey);
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useApiKeyStore;
