import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import { PokemonApp } from "./PokemonApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App />*/}
      <PokemonApp/>
    </Provider>
  </React.StrictMode>
);
