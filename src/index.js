import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './styles/projects.css';  // custom css file
import './styles/details.css';  // custom css file

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// // action (e.g. button-press)
// const changeUsername = (_new_username) => {
//   return {
//     type: "CHANGE_USER",
//     payload: _new_username
//   };
// }
// const changePowerlevel = (_new_power_level) => {
//   return {
//     type: "CHANGE_POWER",
//     payload: _new_power_level
//   };
// }

// // globalized state
// let store = createStore(reducer);

// // display in console
// store.subscribe( () => console.log(store.getState()) );

// // dispatch (execute/perform action)
// store.dispatch(changeUsername("gunjack"));
// store.dispatch(changeUsername("kazuya"));
// store.dispatch(changeUsername("heihachi"));

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
