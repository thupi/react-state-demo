import create from "zustand";
import { combine } from "zustand/middleware";

const useCountStore = create(
  combine(
    {
      count: 0,
    },
    (set) => ({
      add: () => set((prev) => ({ count: prev.count + 1 })),
      subtract: () => set((prev) => ({ count: prev.count - 1 })),
    })
  )
);

export const Zustand = () => {
  const state = useCountStore();
  return (
    <div>
      <h1>Zustand</h1>
      <h2>{state.count}</h2>
      <button onClick={state.add}>+</button>
      <button onClick={state.subtract}>-</button>
    </div>
  );
};
