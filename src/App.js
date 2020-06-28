import React from "react";
import BarraDeNav from "./components/BarraDeNav";
import styled, { ThemeConsumer } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";
import CardInfo from "./components/CardInfo";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  return (
    <Router>
      <ThemeContext.Provider>
        <BarraDeNav />
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          {/* <Route exact path="/:category/:type" component={CardInfo}></Route> */}
          <Route exact path="/:type/:id/" component={CardInfo}></Route>
          <Route
            path="/:category/:type/page/:page"
            component={DisplayCardsFull}
          ></Route>
          {/* <Route path="/:hola" component={DisplayCardsFull}></Route> */}
        </Switch>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
