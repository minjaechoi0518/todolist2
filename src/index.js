import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configStore"; // react-redux 라이브러리에서 Provider 컴포넌트를 임포트
// import { legacy_createStore as createStore } from "redux";

// const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
