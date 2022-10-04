import { configureStore } from "@reduxjs/toolkit";
import { Root } from "react-dom/client";
import { connect, Provider } from "react-redux";

// Actions
export const add = () => ({
  type: "ADD",
});
export const subtract = () => ({
  type: "SUBTRACT",
});

// Reducers
const reducer = (state = { count: 0 }, action: any) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Selectors
const getCount = (state: RootState) => state.counter.count;

const Component = ({ count, add, subtract }: any) => {
  return (
    <div>
      <h1>Redux</h1>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: getCount(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract()),
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export const Redux = () => {
  return (
    <Provider store={store}>
      <ConnectedComponent />
    </Provider>
  );
};
