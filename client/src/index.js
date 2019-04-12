import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import "./components/layout/Form.css";

ReactDOM.render(<Home />, document.getElementById('root'));


serviceWorker.unregister();
