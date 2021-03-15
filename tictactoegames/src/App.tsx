import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Components/Game';
import { Login } from './Components/LoginWindow';
import { History } from './Components/History';
import DemoDashBoard from './Components/ProjectDemo/DemoDashBoard';
import TopBar from './Components/ProjectDemo/TopBar';

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
            <Route path="/dashboard" exact={true} component={DemoDashBoard} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

function AppComponent() {
  return (
    <div>
      <Content />
      
    {/* <SideBar /> */}
    </div>

  )
}

function App() {
  return <AppComponent />
}

export default App;
