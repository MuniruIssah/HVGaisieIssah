import React from 'react'
import {Switch,Route, useRouteMatch } from "react-router-dom";
import EnterPassword from '../pages/EnterPassword/enterPassword';
import Verification from '../pages/NumberVerification/verification';
import ResetPassword from '../pages/ResetPassword/resetPassword';
import SuccessPage from '../pages/SuccessPage/success';
export const ResetPasswordRoutes = () => {
    const {path}=useRouteMatch()
    return (
       <Switch>
           <Route exact path={path}>
                <ResetPassword/>
           </Route>
           <Route path={`${path}/success`}>
               <SuccessPage/>
           </Route>
           <Route exact path={`${path}/:number`}>
                <Verification/>
           </Route>
           <Route path={`${path}/:number/newPassword`}>
                <EnterPassword/>
           </Route>

       </Switch>
    )
}
