import React, {useContext, useState} from 'react';
import {AppBar, Button, Grid, Link, Toolbar, makeStyles, Tooltip} from "@material-ui/core";
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
import {createUserByEmail, getUserByEmail, getUserRole} from "../http/users_api";
import Box from "@mui/material/Box";

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
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const classes = useStyles();
    const [role, setRole] = useState("");
    const [roleId, setRoleId] = useState('');
    if (!role) {
        getUserByEmail(user.email).then(
            data => {
                setRoleId(data["roleId"]);
                if (data) {
                    getUserRole(data["roleId"]).then(role =>
                        setRole(role.role)
                    )
                }
            }
        )
    }

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container alignItems={"flex-end"} justifyContent={"flex-end"}>
                    {user ?
                        <React.Fragment>
                            <Tooltip title={"Роль " + role} placement="bottom-start">
                                <Typography style={{marginRight: "20px"}}> Привет, {user.displayName}</Typography>
                            </Tooltip>
                            {/*<NavLink as={Link} to={USER_ROUTE} className={classes.link}>Профиль</NavLink>*/}
                            <NavLink as={Link} to={MAIN_ROUTE} className={classes.link}> Главная</NavLink>
                            <NavLink as={Link} to={GENERAL_INFO_ROUTE} className={classes.link}> Общая сводка</NavLink>
                            <NavLink as={Link} to={ABOUT_US_ROUTE} className={classes.link}> О нас</NavLink>
                            {roleId === 0 ?
                                <NavLink as={Link} to={ADD_ROUTE} className={classes.link}> Добавление</NavLink> : null}
                            {/*<NavLink as={Link} to={CONTRIBUTIONS_ROUTE} className={classes.link}> Мой вклад</NavLink>*/}
                            <Button onClick={() => auth.signOut()} variant={"outlined"}
                                    color={"secondary"}>Выйти</Button>
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
