import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "./styles.css";
const Content = ({ innerContent }) => {
  return (
    <main className="hvDashboardContentArea">
      <Switch>
        {innerContent.map((item) => (
          <Route path={item.path} exact={item.exact}>
            {item.component}
          </Route>
        ))}
      </Switch>
    </main>
  );
};

export default Content;
