import React, {useContext} from 'react';
import {AppBar, Button, Grid, Link, Toolbar} from "@material-ui/core";
import {NavLink, Route} from "react-router-dom";
import {ABOUT_US_ROUTE, CONTRIBUTIONS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MARKUP_ROUTE, USER_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container alignItems={"flex-end"} justifyContent={"flex-end"}>
                    {user ?
                        <React.Fragment>
                            <NavLink as={Link} to={USER_ROUTE} className={"link"}> Профиль</NavLink>
                            <NavLink as={Link} to={MAIN_ROUTE} className={"link"}> Главная</NavLink>
                            <NavLink as={Link} to={ABOUT_US_ROUTE} className={"link"}> О нас</NavLink>
                            <NavLink as={Link} to={CONTRIBUTIONS_ROUTE} className={"link"}> Мой вклад</NavLink>
                            <NavLink as={Link} to={MARKUP_ROUTE} className={"link"}> Разметить текст </NavLink>
                            <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <NavLink as={Link} to={ABOUT_US_ROUTE} className={"link"}> О нас </NavLink>
                            <NavLink as={Link} to={MARKUP_ROUTE} className={"link"}> Разметить текст </NavLink>
                            <NavLink as={Link} to={LOGIN_ROUTE}>Вход/Регистрация</NavLink>
                        </React.Fragment>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
