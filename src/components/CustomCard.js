import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";

const CustomCard = ({id, topic, type}) => {
    const style = {
        maxWidth: 300,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }

    return (
        <Box my={2}>
        <Card sx={{ maxWidth: 445 }} id={id} style={style}>
            <CardActionArea>
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    height="140"*/}
                {/*    image="/static/images/cards/contemplative-reptile.jpg"*/}
                {/*    alt="green iguana"*/}
                {/*/>*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Группа, из которой брались материалы - {topic}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Box>
    );
};

export default CustomCard;
