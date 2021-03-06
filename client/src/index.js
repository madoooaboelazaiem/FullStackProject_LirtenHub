import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import "./components/layout/Form.css";
import store from "./ConfigureStore";
import { Provider } from "react-redux";
import { Link,Route, BrowserRouter  ,browserHistory,Switch } from 'react-router-dom'

ReactDOM.render(
  
    
  <Provider store={store}>
   <App/> 
  </Provider>

  ,

  document.getElementById("root")
);

serviceWorker.unregister();
