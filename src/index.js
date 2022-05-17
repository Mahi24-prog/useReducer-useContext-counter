import { StrictMode } from "react";
import { CounterProvider } from "./counterContext";

import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
  rootElement
);
