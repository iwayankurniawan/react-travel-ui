import React, {useEffect} from 'react';
import './App.css';
import Home from "./Component/Home";
import Content from "./Component/Content";
import Article from "./Component/Article";
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
          <Content />
          <Article />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
