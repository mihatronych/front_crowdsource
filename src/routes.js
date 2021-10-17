import {ABOUT_US_ROUTE, CONTRIBUTIONS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MARKUP_ROUTE, USER_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import Main from "./pages/Main";
import Markup from "./pages/Markup";
import AboutUs from "./pages/AboutUs";
import Contributions from "./pages/Contributions";
import User from "./pages/User.jsx";

export const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: MARKUP_ROUTE,
        Component: Markup
    },
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUs
    }

]

export const privateRoutes =[

    {
        path: CONTRIBUTIONS_ROUTE,
        Component: Contributions
    },
    {
        path: USER_ROUTE,
        Component: User
    },

]
