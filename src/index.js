import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

// I suppose this is a built-in method in Redux
import rootReducer from './reducers';

// combineReducers 的第一个功能就是组合多个 reducer 的 state，最终合并成一个大的 JavaScript 对象状态树，然后自动存储在 Redux Store 里面，所以我们不再需要给 createStore 显式的传递第二个 initialState 参数了。
const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
