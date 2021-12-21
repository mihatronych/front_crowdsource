import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/material';
import Box from "@mui/material/Box";
import {Checkbox, FormControlLabel} from "@material-ui/core";


const Qcard = ({number, id, element, type, checkedMarks}) => {
    const style1 = {
        maxWidth: 300,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }

    const style2 = {
        minWidth: 300,
        padding: "105x",
        boxSizing: "borderBox",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }
    const marks = [
        {id: 0, label: "Токсично", enLabel: "toxic"},
        {id: 2, label: "Позитивно окрашено", enLabel: "emotional_positive"},
        {id: 3, label: "Негативнао окрашено", enLabel: "emotional_negative"},
        {id: 4, label: "Оскорбительно", enLabel: "rude"},
        {id: 5, label: "Личное оскорбление", enLabel: "individual_obscene"},
        {id: 6, label: "Оскорбление социальной группы", enLabel: "group_obscene"}
    ]

    const [checkboxResults, setCheckboxResults] = React.useState({});

    useEffect(() => {
        const result = {};
        marks.map(mark => {
            result[mark.enLabel] = 0;
        })
        result["commentId"] = id;
        setCheckboxResults(result);
    }, [])

    const checkboxChange = (event, id) => {
        if (event.target.checked) {
            checkboxResults[id] = 1;
        }
        checkedMarks(checkboxResults);
    }

    return (
        <Box m={4}>
            <Card id={id} style={type === "picture" ? style1 : style2}>

                {type === "picture" ?
                    <CardMedia
                        component="img"
                        height="160"
                        // image = {`/static/media/${element.img}`}
                        alt="meme"
                    /> : null}
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {number}.{type === "picture" ? "Как бы вы оценили картинку выше?" : element.text}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Stack>
                            {marks.map(item =>
                                <FormControlLabel
                                    control={<Checkbox onClick={(e) => checkboxChange(e, item.enLabel)}/>}
                                    key={item.id}
                                    label={item.label}/>
                            )}
                        </Stack>
                    </Typography>
                </CardContent>

            </Card>
        </Box>
    );
};

export default Qcard;
