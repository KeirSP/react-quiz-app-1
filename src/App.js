import React from 'react';
import './App.css';
import Setup from "./components/quizsetup"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Question from "./components/Question"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Setup} />
      <Route path="/quiz" component={Question} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
