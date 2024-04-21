import React from "react";
import ReactDOM from "react-dom/client"; // 更新されたインポートパス
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ReactDOM.renderの代わりにcreateRootを使用
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
