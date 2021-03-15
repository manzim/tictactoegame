import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Components/Game';
import { Login } from './Components/LoginWindow';
import { History } from './Components/History';

function Content() {
  const contentStyle = {
    paddingRight: 2,
    paddingLeft: 2,
    //backgroundImage: `url(${bgimg})`,
    minHeight: 'inherit'
  };
  return (
    <>
      <div style={contentStyle}>
        <BrowserRouter>
          <Switch>
            <Route path="/gamewindow" exact={true} component={Game} />
            <Route path="/" exact={true} component={Login} />
            <Route path="/history" exact={true} component={History} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

function AppComponent() {
  return <Content />
}

function App() {
  return <AppComponent />
}

export default App;
