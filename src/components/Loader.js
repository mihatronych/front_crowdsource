import React from 'react';
import {Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alingitems={"center"}
                  justifyContent={"center"}
            >
                <Grid
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <div className="lds-hourglass"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;