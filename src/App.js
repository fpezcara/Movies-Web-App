import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";
import IdCard from "./components/IdCard";
import CardsRow from "./components/CardsRow";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route exact path="/:type" component={CardsRow}></Route>
        <Route path="/:type/:id" component={IdCard}></Route>
        <Route
          path="/:category/:type/page/:page"
          component={DisplayCardsFull}
        ></Route>
      </Switch>
    </Router>
  );
};

export default App;
