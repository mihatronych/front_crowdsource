import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import {QUESTIONNAIRE_ROUTE} from "../utils/consts";

const CustomCard = ({id, topic, type}) => {
    const style = {
        maxWidth: 300,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.2)"
        }
    }

    return (
        <Box my={2}>
        <Card sx={{ maxWidth: 445 }} id={id} style={style}>
            <CardActionArea >
                <Link style={{ textDecoration: 'none' }} to={{
                    pathname: QUESTIONNAIRE_ROUTE,
                    state: {type: type, topic: topic}
                }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={'text.primary'}>
                       {type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Группа, из которой брались материалы - {topic.theme}
                    </Typography>
                </CardContent>
                </Link>
            </CardActionArea>
        </Card>
        </Box>
    );
};

export default CustomCard;
