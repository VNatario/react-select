import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import MultipleSelect from "./multipleSelct";
import AsyncSelectSimple from "./selectAsync";
import MultiSelectAsync from "./multiSelectAsync";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Para visualizar os demais selects basta descomentar o que deseja ver */}
    {/* <App /> */}
    {/* <MultipleSelect /> */}
    {/* <AsyncSelectSimple /> */}
    <MultiSelectAsync />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
