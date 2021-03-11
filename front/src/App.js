import React from "react";
import Home from "./components/Home";
import FormRegisterContainer from "./container/FormRegisterContainer";
import Shop from "./components/Shop";
import SingleCard from "./components/SingleCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormLoginContainer from "./container/FormLoginContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FormLoginContainer} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={FormRegisterContainer} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/singlecard" component={SingleCard} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
