import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Component/Redux/redux_store';
import { Provider } from 'react-redux';

export let render = () => ReactDOM.render(

    <React.StrictMode>
      <Provider store={store}>
        <App />
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
