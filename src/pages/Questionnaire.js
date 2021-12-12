import pic from '../store/шапка.jpg';
import pic2 from '../store/шапка2.jpg';
import Qcard from "../components/Qcard";
import {Grid, Button} from "@material-ui/core";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import React from "react";

const Questionnaire = ({type, topic}) => {
    type = "picture";

    const data = [
        {type: "picture", element: pic},
        {type: "picture", element: pic2},
        {type: "picture", element: pic},
        {type: "picture", element: pic2},
        {type: "picture", element: pic},
        {type: "picture", element: pic2},
        {type: "picture", element: pic2},
        {type: "picture", element: pic},
        {type: "picture", element: pic2},
        {type: "picture", element: pic},
    ]

    const renderTitle = function (type) {
        switch (type) {
            case"comment":
                return "комментарии";
            case "post":
                return "посты";
            case "picture":
                return "картинки";
            default:
                return undefined;
        }
    }

    return (
        <div>
            <Box m={2}>
                <Typography gutterBottom variant="h5" component="div"> Разметьте {renderTitle(type)} </Typography>
            </Box>
            <Grid container>
                {data.map((item, i) =>
                    <Grid item>
                        <Qcard id={i} type={item.type} element={item.element}/>
                    </Grid>
                )}
            </Grid>
            <Grid container justifyContent={"flex-end"}>
                <Box m={2}>
                    <Button variant={"contained"} color={"primary"}> Продолжить</Button>
                </Box>
                <Box m={2}>
                    <Button variant={"outlined"} color={"primary"}> Закончить</Button>
                </Box>
            </Grid>
        </div>
    )
};
export default Questionnaire;
