import React from "react";
import BarraDeNav from "./components/BarraDeNav";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";
import CardInfoFull from "./components/CardInfoFull";


const App = () => {

  return (
    <Router>
      <BarraDeNav />

      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route exact path="/:type/:id" component={CardInfoFull}></Route>
        {/* <Route
          exact
          path="/:type/:category/:page"
          component={DisplayCardsFull}
        ></Route> */}
        <Route path="/:hola" component={DisplayCardsFull}></Route>
      </Switch>
    </Router>
  );
};

export default App;
