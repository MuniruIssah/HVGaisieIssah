import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddSalesPerson from "./pages/AddSalesPerson/AddSalesPerson";
import VehicleView from "./pages/VehicleView/VehicleView";
import LogisticsPage from "./pages/LogisticsPage/LogisticsPage";
import DriverView from "./pages/DriverView/DriverView";

const Logistics= ({ path }) => {
  return (
    <div>
      <Switch>
      <Route exact path={`${path}/add`} component={AddSalesPerson} />
        <Route exact path={`${path}/vehicle/:vehicleID`} component={VehicleView} />
        <Route exact path={`${path}/driver/:driverID`} component={DriverView} />
        <Route path={path} exact component={LogisticsPage} />
      </Switch>
    </div>
  );
};

export default Logistics;
