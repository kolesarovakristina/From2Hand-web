import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/index";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./App"; 
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
  }
});

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
