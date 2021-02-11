import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heros/HeroScreen";
import { MarvelScreen } from "../components/marce/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeid" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
