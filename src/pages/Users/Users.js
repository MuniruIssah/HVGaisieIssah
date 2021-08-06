import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile";
import UsersPage from "./pages/UsersPage/UsersPage";

const Users = ({ path }) => {
  return (
    <div>
      <Switch>
        <Route path={`${path}/:userID`} component={UserProfile} />
        <Route path={path} exact component={UsersPage} />
      </Switch>
    </div>
  );
};

export default Users;
