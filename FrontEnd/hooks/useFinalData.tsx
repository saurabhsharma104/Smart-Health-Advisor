import { create } from 'zustand';

interface StoreState {
  predictedDisease: Object[];
}

interface StoreActions {
  setPredictedDisease: (data: Object[]) => void;
  isloading: boolean;
  setIsloading:(data:boolean)=>void
}

const useFinalData = create<StoreState & StoreActions>((set) => ({
  predictedDisease: [],
  isloading: false,
  setIsloading:(data)=>set({isloading:data}),
  setPredictedDisease: (data) => set({ predictedDisease: data }),
}));

export default useFinalData;