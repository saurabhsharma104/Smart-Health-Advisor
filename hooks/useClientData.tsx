import {create} from 'zustand';

interface AppState {
  alcoholData: {
    value: string;
    label: string;
  };
  diseaseData: {
    value: string;
    label: string;
  };
  setAlcoholData: (data: { value: string; label: string }) => void;
  setDiseaseData: (data: { value: string; label: string }) => void;
}

const useClientData = create<AppState>((set) => ({
  alcoholData: {
    value: "",
    label: "",
  },
  diseaseData: {
    value: "",
    label: "",
  },
  setAlcoholData: (data) => set({ alcoholData: { ...data } }),
  setDiseaseData: (data) => set({ diseaseData: { ...data } }),
}));

export default useClientData;