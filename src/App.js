import React, { Fragment } from "react";
import "./css/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import PopArt from "./components/PopArt";
import ClassicArt from "./components/ClassicArt";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/pop-art" component={PopArt}></Route>
            <Route path="/classic-art" component={ClassicArt}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
