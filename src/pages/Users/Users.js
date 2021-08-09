import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddUser from "./pages/AddUser/AddUser";
import UserProfile from "./pages/UserProfile/UserProfile";
import UsersPage from "./pages/UsersPage/UsersPage";

const Users = ({ path }) => {
  return (
    <div>
      <Switch>
      <Route exact path={`${path}/add`} component={AddUser} />
        <Route exact path={`${path}/:userID`} component={UserProfile} />
        <Route path={path} exact component={UsersPage} />
      </Switch>
    </div>
  );
};

export default Users;
