
import reportWebVitals from './reportWebVitals';
import users from "./Component/Redux/State";
import {update_new_user} from "./Component/Redux/State"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Component/Redux/State';
import { add_user } from './Component/Redux/State';




export let render = (_store) => ReactDOM.render(
    <React.StrictMode>
      <App  store={_store} dispatch={store.dispath.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );

render(store);

store.subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
