import React, { Fragment } from "react";
import "./css/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Sculpture from "./components/Sculpture";
import Painting from "./components/Painting";
import Artist from "./components/Artist";
import Err404 from "./pages/Err404";

function App() {
  return (
    <Fragment>
      <Router forceRefresh={true}>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/painting" component={Painting}></Route>
            <Route exact path="/sculpture" component={Sculpture}></Route>
            <Route exact path="/artist/:slug" component={Artist}></Route>
            <Route component={Err404}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
