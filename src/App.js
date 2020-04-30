import React from 'react';
import './App.css';
import Setup from "./components/quizsetup"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Question from "./components/Question"
import Results from "./components/Results"
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Setup} />
          <Route path="/quiz" component={Question} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
