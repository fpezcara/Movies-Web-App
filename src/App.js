import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DisplayCardsFull from "./components/DisplayCardsFull";
import IdCard from "./components/IdCard";
import CategoriesComponent from "./components/CategoriesComponent";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route exact path="/:type" component={CategoriesComponent}></Route>
        <Route exact path="/:type/:id/:option" component={IdCard}></Route>
        <Route
          exact
          path="/:type/:category/page/:page"
          component={DisplayCardsFull}
        ></Route>
      </Switch>
    </Router>
  );
};

export default App;
