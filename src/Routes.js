import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux'
import { initialSetting } from './Modules/reducers/beerlist';

import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import Cart from "./Pages/Cart";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialSetting());
  }, [dispatch]);

  return (
    <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/home" component={Home} />
          <Route path="/beerlist" component={BeerList} />
          <Route path="/cart" component={Cart} />
        </Switch>
    </Router>
  );
};

export default Routes;
