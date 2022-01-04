import React, {useContext} from 'react';
import {AppBar, Button, Grid, Link, Toolbar,makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {
    ABOUT_US_ROUTE,
    CONTRIBUTIONS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MARKUP_ROUTE,
    GENERAL_INFO_ROUTE,
    ADD_ROUTE
} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
    link: {
        textAlign: "center",
        textDecoration: "none",
        color: "white",
        marginRight: theme.spacing(2),
        "&:hover": {
            color: "rgba(255,255,255,0.5)",
        },
    },
}));

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const classes = useStyles();

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container alignItems={"flex-end"} justifyContent={"flex-end"}>
                    {user ?
                        <React.Fragment>
                            <Typography style={{marginRight: "20px"}}> Привет, {user.displayName}</Typography>
                            {/*<NavLink as={Link} to={USER_ROUTE} className={classes.link}>Профиль</NavLink>*/}
                            <NavLink as={Link} to={MAIN_ROUTE} className={classes.link}> Главная</NavLink>
                            <NavLink as={Link} to={GENERAL_INFO_ROUTE} className={classes.link}>  Общая сводка</NavLink>
                            <NavLink as={Link} to={ABOUT_US_ROUTE} className={classes.link}> О нас</NavLink>
                            <NavLink as={Link} to={ADD_ROUTE} className={classes.link}> Добавить</NavLink>
                            {/*<NavLink as={Link} to={CONTRIBUTIONS_ROUTE} className={classes.link}> Мой вклад</NavLink>*/}
                            <Button onClick={() => auth.signOut()} variant={"outlined"} color={"secondary"}>Выйти</Button>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <NavLink as={Link} to={ABOUT_US_ROUTE} className={classes.link}> О нас </NavLink>
                            {/*<NavLink as={Link} to={MARKUP_ROUTE} className={classes.link}> Разметить текст </NavLink>*/}
                            <NavLink as={Link} to={LOGIN_ROUTE} className={classes.link}>Вход/Регистрация</NavLink>
                        </React.Fragment>
                        // Общая таблица вся и конкретно по человеку
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
