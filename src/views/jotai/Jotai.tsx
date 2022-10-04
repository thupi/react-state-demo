import { atom, useAtom } from "jotai";

const countAtom = atom(0);

const addCountAtom = atom(null, (_get, set) => {
  set(countAtom, (c) => c + 1);
});
const subtractCountAtom = atom(null, (_get, set) => {
  set(countAtom, (c) => c - 1);
});

export const Jotai = () => {
  const [count] = useAtom(countAtom);
  const [, add] = useAtom(addCountAtom);
  const [, subtract] = useAtom(subtractCountAtom);

  return (
    <div>
      <h1>Jotai</h1>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};
