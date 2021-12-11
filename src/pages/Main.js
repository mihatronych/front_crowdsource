import React from 'react';
import CustomCard from '../components/CustomCard'
import {Grid, Stack} from "@mui/material";
import {
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@material-ui/core";
import Box from "@mui/material/Box";


const Main = () => {
    const sample = [
        {id: 1, topic: "degradation", type: 'post'},
        {id: 2, topic: "degradation", type: 'comment'},
        {id: 3, topic: "life of mouse", type: 'comment'},
        {id: 4, topic: "life of mouse", type: 'picture'},
    ]
    const topics = [
        {topic: 'degradation', value: 1},
        {topic: 'life of mouse', value: 2},
        {topic: 'miley syrus is my love', value: 3},
    ]
    const [topic, setTopic] = React.useState('');
    const [type, setType] = React.useState('');

    const topicChange = (event) => {
        setTopic(event.target.value);
    };
    const typeChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div>
            <Box my={2}>
            <Grid container justifyContent={"start"} spacing={4}>
               <Grid item> </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="topic">Тема</InputLabel>
                        <Select
                            labelId="topic"
                            id="topic"
                            value={topic}
                            label="Topic"
                            onChange={topicChange}
                        >
                            <MenuItem value={0}>
                                <em>Все</em>
                            </MenuItem>
                            {topics.map((item) => <MenuItem value={item.value}>{item.topic}</MenuItem>)}

                        </Select>
                        {/*<FormHelperText>With label + helper text</FormHelperText>*/}
                    </FormControl>
                </Grid>

                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="type">Тип</InputLabel>
                        <Select
                            labelId="type"
                            id="type"
                            value={type}
                            label="Type"
                            onChange={typeChange}
                        >
                            <MenuItem value={0}>
                                <em>Все</em>
                            </MenuItem>
                            <MenuItem value={0}>Комментарии</MenuItem>
                            <MenuItem value={0}>Посты</MenuItem>
                            <MenuItem value={0}>Картинки</MenuItem>

                        </Select>
                        {/*<FormHelperText>With label + helper text</FormHelperText>*/}
                    </FormControl>
                </Grid>
            </Grid>
            </Box>
            {/*<Divider />*/}
            <Grid container justifyContent={"center"} spacing={2}>
                <Stack>
                    {sample.map((item) =>
                        <CustomCard id={item.id} topic={item.topic} type={item.type}/>
                    )}
                </Stack>


            </Grid>
        </div>
    );
};

export default Main;
