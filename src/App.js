import React from 'react';
import './App.css';
import Setup from "./components/quizsetup"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Question from "./components/Question"
import Results from "./components/Results"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Setup} />
      <Route path="/quiz" component={Question} />
      <Route path="/results" component={Results} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
