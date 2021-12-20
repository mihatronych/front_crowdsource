import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Stack} from '@mui/material';
import Box from "@mui/material/Box";
import {Checkbox, FormControlLabel, Grid} from "@material-ui/core";


const Qcard = ({id, element, type}) => {
    const style = {
        maxWidth: 300,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }
    const marks = [{id: 0, label: "Токсично"},
        {id: 2, label: "Позитивно окрашено"},
        {id: 3,label: "Негативнао окрашено"},
        {id: 4, label: "Оскорбительно"},
        {id: 5, label: "Личное оскорбление"},
        {id: 6, label: "Оскорбление социальной группы"}
    ]

    return (
        <Box m={4}>
            <Card id={id} style={style}>

                    {type === "picture" ?
                        <CardMedia
                            component="img"
                            height="140"
                            image={element}
                            alt="green iguana"
                        /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Как бы вы оценили картинку выше?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Stack>
                                {marks.map(item =>
                                    <FormControlLabel control={<Checkbox/>} label={item.label}/>
                                )}
                            </Stack>
                        </Typography>
                    </CardContent>

            </Card>
        </Box>
    );
};

export default Qcard;
