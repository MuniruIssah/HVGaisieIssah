import React from 'react'
import { BrowserRouter as Router,Switch,Route, useRouteMatch } from "react-router-dom";
import Verification from '../pages/NumberVerification/verification';
import ResetPassword from '../pages/ResetPassword/resetPassword';
export const ResetPasswordRoutes = () => {
    const {path}=useRouteMatch()
    return (
       <Switch>
           <Route exact path={path}>
                <ResetPassword/>
           </Route>
           <Route path={`${path}/:number`}>
                <Verification/>
           </Route>
       </Switch>
    )
}
