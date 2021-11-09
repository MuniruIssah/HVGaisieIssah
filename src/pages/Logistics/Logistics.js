import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddSalesPerson from "./pages/AddSalesPerson/AddSalesPerson";
import UserProfile from "./pages/VehicleView/VehicleView";
import LogisticsPage from "./pages/LogisticsPage/LogisticsPage";

const Logistics= ({ path }) => {
  return (
    <div>
      <Switch>
      <Route exact path={`${path}/add`} component={AddSalesPerson} />
        <Route exact path={`${path}/:userID`} component={UserProfile} />
        <Route path={path} exact component={LogisticsPage} />
      </Switch>
    </div>
  );
};

export default Logistics;
