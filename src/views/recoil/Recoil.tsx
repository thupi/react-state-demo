import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

const counterState = atom({
  key: "Counter",
  default: {
    count: 0,
  },
});

const Component = () => {
  const counter = useRecoilValue(counterState);
  const setCounter = useSetRecoilState(counterState);

  const handleAdd = () => {
    setCounter((state) => ({ ...state, count: state.count + 1 }));
  };

  const handleSubtract = () => {
    setCounter((state) => ({ ...state, count: state.count - 1 }));
  };

  return (
    <div>
      <h1>Recoil</h1>
      <h2>{counter.count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </div>
  );
};

export const Recoil = () => {
  return (
    <RecoilRoot>
      <Component />
    </RecoilRoot>
  );
};
