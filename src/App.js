import React from 'react';
import './App.css';
import Setup from "./components/quizsetup"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Setup} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
