import { observable } from "@legendapp/state";
import { enableLegendStateReact } from "@legendapp/state/react";

enableLegendStateReact();

const count = observable(0);

const handleAdd = () => {
  count.set((state) => state + 1);
};

const handleSubtract = () => {
  count.set((state) => state - 1);
};

export const Legend = () => {
  return (
    <div>
      <h1>Legend</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </div>
  );
};
