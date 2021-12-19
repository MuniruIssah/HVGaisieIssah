import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddCouponCodes from "./pages/AddUser/AddCouponCode";
import UserProfile from "./pages/UserProfile/UserProfile";
import UsersPage from "./pages/UsersPage/UsersPage";

const CouponCodes = ({ path }) => {
  return (
    <div>
      <Switch>
      <Route exact path={`${path}/add`} component={AddCouponCodes} />
        <Route exact path={`${path}/:userID`} component={UserProfile} />
        <Route path={path} exact component={UsersPage} />
      </Switch>
    </div>
  );
};

export default CouponCodes;
