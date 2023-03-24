import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      currentNumber: 0,
      ttnInfo: [],
      listOfNumbers: [],
      searchQuery: "",
      locations: [],
      page: 1,
      totalCount: null,
      perPage: 50,

      setCurrentNumber: (number) => set(() => ({ currentNumber: number })),

      setListOfNumbers: (newNumber) =>
        set((state) => ({
          listOfNumbers: [...state.listOfNumbers, newNumber],
        })),

      setTtnInfo: (data) => set(() => ({ ttnInfo: data })),

      deleteNumbers: () => set(() => ({ listOfNumbers: [] })),

      setSearchQuery: (query) => set(() => ({ searchQuery: query })),
      setPage: () => set(() => ({ page: 1 })),

      setLocations: (data) => set(() => ({ locations: data })),

      addLocations: (data) =>
        set((state) => ({ locations: [...state.locations, ...data] })),

      setTotalCount: (count) => set(() => ({ totalCount: count })),

      loadMore: () => set((state) => ({ page: state.page + 1 })),
    }),

    {
      partialize: (state) => ({ listOfNumbers: state.listOfNumbers }),
    }
  )
);

export default useStore;
