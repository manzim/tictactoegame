import React, { useState } from 'react';
import './App.css';
import { Button, InputGroup } from '@blueprintjs/core';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

// import GameWindow from './components/GameWindow';

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
            {/* <Route path="/gamewindow" exact={true} component={GameWindow} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

function AppComponent() {

  const [playerOne, setPlayerOne] = useState<string>();
  const [playerTwo, setPlayerTwo] = useState<string>();

  const [buttonDisable, setButtonDisable] = useState<boolean>(false)

  const isDiasbled = () => {
    if (buttonDisable)
      return true
    const cndtn = (playerTwo !== '' && playerOne !== '') ? false : true
    return cndtn
  }

  return (
    <>
      <div style={{ backgroundColor: "#f8f8f8", minHeight: "90vh", position: "relative" }}>


        <article className="cf center w-60 v-mid align-items-center">
          <div className="fl w-50 bg-near-white tc">
            <InputGroup
              value={playerOne}
              onChange={(e) => setPlayerOne(e.target.value)}
              large={true}
              placeholder="Enter p1..."
              // rightElement={lockButton}
              small={true}
              type="text"
            />

          </div>
          <div className="fl w-50 bg-light-gray tc">
            <InputGroup
              value={playerTwo}
              onChange={(e) => setPlayerTwo(e.target.value)}
              large={true}
              placeholder="Enter p2..."
              // rightElement={lockButton}
              small={true}
              type="text"
            />
          </div>
          {(playerOne !== '' && playerTwo !== '' ) ?
            (<Button
              text="move to game window"
              className="w-60 center"
              intent="success"
              disabled={false}
            />
            ) : undefined}
        </article>
        <Content />
      </div>
    </>
  )
}

function App() {
  let history = useHistory();
  return <AppComponent />
}

export default App;
