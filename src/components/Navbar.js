import React, {useContext} from 'react';
import {AppBar, Button, Grid, Link, Toolbar,makeStyles} from "@material-ui/core";
import {NavLink, Route} from "react-router-dom";
import {ABOUT_US_ROUTE, CONTRIBUTIONS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MARKUP_ROUTE, USER_ROUTE} from "../utils/consts";
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
        <div></div>
        // <AppBar color={"primary"} position="static">
        //     <Toolbar variant={"dense"}>
        //         <Grid container alignItems={"flex-end"} justifyContent={"flex-end"}>
        //             {user ?
        //                 <React.Fragment>
        //                     {/*<NavLink as={Link} to={USER_ROUTE} className={classes.link}>Профиль</NavLink>*/}
        //                     <NavLink as={Link} to={MAIN_ROUTE} className={classes.link}> Главная</NavLink>
        //                     <NavLink as={Link} to={ABOUT_US_ROUTE} className={classes.link}> О нас</NavLink>
        //                     <NavLink as={Link} to={CONTRIBUTIONS_ROUTE} className={classes.link}> Мой вклад</NavLink>
        //                     <NavLink as={Link} to={MARKUP_ROUTE} className={classes.link}> Разметить текст </NavLink>
        //                     <Button onClick={() => auth.signOut()} variant={"outlined"} color={"secondary"}>Выйти</Button>
        //                 </React.Fragment>
        //                 :
        //                 <React.Fragment>
        //                     <NavLink as={Link} to={ABOUT_US_ROUTE} className={classes.link}> О нас </NavLink>
        //                     <NavLink as={Link} to={MARKUP_ROUTE} className={classes.link}> Разметить текст </NavLink>
        //                     <NavLink as={Link} to={LOGIN_ROUTE} className={classes.link}>Вход/Регистрация</NavLink>
        //                 </React.Fragment>
        //             }
        //         </Grid>
        //     </Toolbar>
        // </AppBar>
    );
};

export default Navbar;
