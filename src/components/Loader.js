import React from 'react';
import {Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{minHeight: '100vh'}}
            >
                <Grid item xs={3}>
                    <div className="spans">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
