import {LOGIN_ROUTE, MAIN_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import Main from "./components/Main";

export const publicRoutes =[
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]