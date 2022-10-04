import { useMachine } from "@xstate/react";
import { createMachine, interpret, assign } from "xstate";

const counterMachine = createMachine({
  initial: "active",
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        ADD: {
          actions: assign({ count: (context: any) => context.count + 1 }),
        },
        SUBTRACT: {
          actions: assign({ count: (context: any) => context.count - 1 }),
        },
      },
    },
  },
});

export const Xstate = () => {
  const [current, send] = useMachine(counterMachine);
  return (
    <div>
      <h1>Xstate</h1>
      <h2>{current.context.count}</h2>
      <button onClick={() => send("ADD")}>+</button>
      <button onClick={() => send("SUBTRACT")}>-</button>
    </div>
  );
};
