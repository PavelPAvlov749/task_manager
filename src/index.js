import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App_container} from './App';
import { store } from './Component/Redux/redux_store';
import { Provider } from 'react-redux';

const fake_disp = function (dispatch){
   dispatch({type:"fake"})
}
export let render = () => ReactDOM.render(

    <React.StrictMode>
      <Provider store={store}>
        <App_container />
      </Provider>     
    </React.StrictMode>,
    document.getElementById('root')
  );

render(store);

// store.subscribe(()=>
// {
//   let state = store.getState();
//   render(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
