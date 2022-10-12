import create from "zustand";
import { produce } from "immer";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ListScreen } from "../../components/ListScreen";

const useCountStore = create(
  combine(
    {
      count: 0,
    },
    (set) => ({
      add: () => {},
      subtract: () => set((prev) => ({ count: prev.count - 1 })),
    })
  )
);

const useListStore = create(
  immer(
    combine(
      {
        data: [{ key: "1", label: "Item 1" }],
      },
      (set) => ({
        add: () => {
          set((state) => {
            state.data.push({
              key: `${state.data.length + 1}`,
              label: `Item ${state.data.length + 1}`,
            });
          });
        },
        remove: () =>
          set((state) => {
            data: state.data.pop();
          }),
        changeTitleOfLast: () => {
          set((state) => {
            const newLabel = state.data[state.data.length - 1].label.replace(
              "Item",
              "Modified"
            );
            state.data[state.data.length - 1].label = newLabel;
          });
        },
      })
    )
  )
);

export const Zustand = () => {
  const state = useCountStore();
  const listState = useListStore();
  return (
    <div>
      <h1>Zustand</h1>
      <h2>{state.count}</h2>
      <button onClick={state.add}>+</button>
      <button onClick={state.subtract}>-</button>

      <br />
      <br />

      <button onClick={useListStore.getState().add}>Add Item</button>
      <button onClick={useListStore.getState().remove}>Remove Item</button>
      <button onClick={useListStore.getState().changeTitleOfLast}>
        Modify Last Item
      </button>
      <h3>Noraml</h3>
      <ListScreen data={listState.data} />
    </div>
  );
};
