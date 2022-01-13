import create from 'zustand';
import { FlatType } from '../types/entities';
import { mountStoreDevtool } from 'simple-zustand-devtools';

type FlatStateType = {
  flats: FlatType[];
  setFlats: (payload: FlatType[]) => void;
  addFlat: (payload: FlatType) => void;
  clearFlats: () => void;
};

export const useStore = create<FlatStateType>((set) => ({
  flats: [],
  setFlats: (payload) =>
    set((state) => ({...state, flats: payload})),
  addFlat: (payload) =>
    set((state) => ({ ...state, flats: [...state.flats, payload] })),
  clearFlats: () => set({ flats: [] }),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore);
}