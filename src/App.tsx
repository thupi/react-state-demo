import { Jotai } from "./views/jotai";
import { Legend } from "./views/legend";
import { Mobx } from "./views/mobx";
import { Recoil } from "./views/recoil";
import { Redux } from "./views/redux";
import { Valtio } from "./views/valtio";
import { Xstate } from "./views/xstate";
import { Zustand } from "./views/zustand";

const panes = [Jotai, Legend, Mobx, Recoil, Redux, Valtio, Xstate, Zustand];
const paneSize = 300;

export const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflowX: "scroll" }}>
      <div style={{ width: panes.length * paneSize }}>
        {panes.map((Component) => (
          <div
            style={{
              width: paneSize,
              float: "left",
            }}
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};
