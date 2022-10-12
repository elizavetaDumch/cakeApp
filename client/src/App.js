import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/App_Router';
import NavBar from './components/NavBar';
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import { Context } from '.';
import {Spinner} from "react-bootstrap";


const App = observer(() => {
  const {user} = useContext(Context) //получаем состояние
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [user])

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>

    /*<div>
      <Auth />
    </div>*/
  );
});

export default App;
