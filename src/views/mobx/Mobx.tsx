import { action, observable } from "mobx";
import { observer } from "mobx-react";

import { ListScreen } from "../../components/ListScreen";

const MobxListScreen = observer(ListScreen);

const appState = observable({
  count: 0,
  subtract: action(function () {
    appState.count -= 1;
  }),
  add: action(function () {
    appState.count += 1;
  }),
});

const listState = observable({
  data: [
    {
      key: "1",
      label: "Item 1",
    },
  ],
  remove: action(function () {
    listState.data.pop();
  }),
  add: action(function () {
    listState.data.push({
      key: `${listState.data.length + 1}`,
      label: `Item ${listState.data.length + 1}`,
    });
  }),
  changeTitleOfLast: action(function () {
    const newLabel = listState.data[listState.data.length - 1].label.replace(
      "Item",
      "Modified"
    );
    listState.data[listState.data.length - 1].label = newLabel;
  }),
});

export const Mobx = observer(() => {
  return (
    <div>
      <h1>Mobx</h1>
      <h2>{appState.count}</h2>
      <button onClick={appState.add}>+</button>
      <button onClick={appState.subtract}>-</button>

      <br />
      <br />

      <button onClick={listState.add}>Add Item</button>
      <button onClick={listState.remove}>Remove Item</button>
      <button onClick={listState.changeTitleOfLast}>Modify Last Item</button>
      <h3>Noraml</h3>
      <ListScreen data={listState.data} />
      <h3>Wrapped in observer()</h3>
      <MobxListScreen data={listState.data} />
    </div>
  );
});
