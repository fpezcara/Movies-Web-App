import React, { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

const HomeComponent = lazy(() => import("./components/HomeComponent"));
const CategoriesComponent = lazy(() =>
  import("./components/CategoriesComponent")
);
const IdCard = lazy(() => import("./components/IdCard"));
const DisplayCardsFull = lazy(() => import("./components/DisplayCardsFull"));
const SearchComponent = lazy(() => import("./components/SearchComponent"));

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/:type" component={CategoriesComponent}></Route>
          <Route exact path="/:type/:id/:option" component={IdCard}></Route>
          <Route
            exact
            path="/multi/:search/page/:page"
            component={SearchComponent}
          ></Route>
          <Route
            exact
            path="/:type/:category/page/:page"
            component={DisplayCardsFull}
          ></Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
