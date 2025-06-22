import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainPage from "./pages/MainPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainPage />
  </React.StrictMode>
);
