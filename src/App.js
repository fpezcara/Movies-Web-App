import React from "react";
import BarraDeNav from "./components/BarraDeNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";
import CardInfo from "./components/CardInfo";
import CardsRow from "./components/CardsRow";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <BarraDeNav />
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route exact path="/:type" component={CardsRow}></Route>
        <Route path="/:type/:id/info" component={CardInfo}></Route>
        <Route
          path="/:category/:type/page/:page"
          component={DisplayCardsFull}
        ></Route>
      </Switch>
    </Router>
  );
};

export default App;
