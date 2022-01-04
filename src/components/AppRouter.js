import React, {useContext, useEffect, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRoutes, publicRoutes, userRoutes} from "../routes";
import {ABOUT_US_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
import {getUserByEmail} from "../http/users_api";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const [roleId, setRoleId] = useState(-1);
    useEffect(() => {
        if (user) {
            getUserByEmail(user.email).then(
                data => {
                    setRoleId(data["roleId"]);
                }
            )
        }
    }, []);

    const routing = () => {
        if (user) {
            if(roleId === 0){
                return <Switch>
                    {adminRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component} exact={true}/>
                    )}
                    <Redirect to={MAIN_ROUTE}/>
                </Switch>;
            }
            else{
                return <Switch>
                    {userRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component} exact={true}/>
                    )}
                    <Redirect to={MAIN_ROUTE}/>
                </Switch>;
            }
        }
        else{
            return <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={ABOUT_US_ROUTE}/>
            </Switch>;
        }

    }

    return routing();
};

export default AppRouter;
