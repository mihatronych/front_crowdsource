import {Link} from "react-router-dom";
import React from "react";
import {Grid, Typography} from "@mui/material";

function Footer() {

    var style = {
        backgroundColor: "#F8F8F8",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }

    var phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
    }

    return (
        <Grid container bottom={0} position={"fixed"} style={style} justifyContent={"space-between"} p={2}>
            <Typography variant="body2">
                <a style={{textDecoration: 'none', color: '#f50057'}} className="pr-2 small-text"
                   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">тыкни :3</a>
            </Typography>
            <Typography color={"text.secondary"} variant="body2"> &copy; {new Date().getFullYear()} Долгушин, Лесив,
                Исмакова</Typography>
        </Grid>
    )
}

export default Footer;
