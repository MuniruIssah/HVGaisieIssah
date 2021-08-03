import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";

const FinancePage = ({ path }) => {
  return (
    <div>
      <Switch>
        <Route path={`${path}/history`} component={TransactionHistory} />
        <Route path={path} exact component={Overview} />
      </Switch>
    </div>
  );
};

export default FinancePage;
