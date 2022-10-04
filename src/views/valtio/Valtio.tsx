import { proxy, useSnapshot } from "valtio";

const countState = proxy({
  count: 0,
});

const add = () => {
  countState.count += 1;
};
const subtract = () => {
  countState.count -= 1;
};

export const Valtio = () => {
  const state = useSnapshot(countState);
  return (
    <div>
      <h1>Valtio</h1>
      <h2>{state.count}</h2>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};
