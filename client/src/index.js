import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserStore from './store/UserStore';
import App from './App';
import CakeStore from './store/CakeStore';
import CartStore from "./store/CartStore";
import './fonts/ofont.ru_Montserrat Alternates.ttf';

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {{
      user: new UserStore(),
      cake: new CakeStore(),
      cart: new CartStore()
  }}>
    <App />
  </Context.Provider>  
);

/*ReactDOM.render(
  <Context.Provider value = {{
    user: new UserStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)*/

