import { action, observable } from "mobx";
import { observer } from "mobx-react";

const appState = observable({
  count: 0,
  subtract: action(function () {
    appState.count -= 1;
  }),
  add: action(function () {
    appState.count += 1;
  }),
});

export const Mobx = observer(() => {
  return (
    <div>
      <h1>Mobx</h1>
      <h2>{appState.count}</h2>
      <button onClick={appState.add}>+</button>
      <button onClick={appState.subtract}>-</button>
    </div>
  );
});
