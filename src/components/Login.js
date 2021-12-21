import React, {useContext, useState} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/compat";
import {getUserByEmail, createUserByEmail} from "../http/users_api";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)

        if(user) {
            getUserByEmail(user.email).then(
                data => {
                    if(!data){
                        createUserByEmail(user.email);
                    }
                }
            )
        }
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
