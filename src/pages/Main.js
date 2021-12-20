import React, {useEffect} from 'react';
import CustomCard from '../components/CustomCard'
import {Grid} from "@mui/material";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@material-ui/core";
import {getAllTopics} from "../http/topics_api";

const Main = () => {
    // const sample = [
    //     {id: 1, topic: "degradation", type: 'post'},
    //     {id: 2, topic: "degradation", type: 'comment'},
    //     {id: 3, topic: "life of mouse", type: 'comment'},
    //     {id: 4, topic: "life of mouse", type: 'picture'},
    //     {id: 5, topic: "life of rat", type: 'picture'},
    //     {id: 6, topic: "life of rat", type: 'post'},
    //     {id: 7, topic: "life of mouse", type: 'post'},
    //     {id: 8, topic: "life of rat", type: 'picture'},
    //     {id: 9, topic: "miley syrus is my love", type: 'picture'},
    //     {id: 10, topic: "life of rat", type: 'picture'},
    //     {id: 11, topic: "life of mouse", type: 'picture'},
    //     {id: 12, topic: "life of rat", type: 'picture'},
    //     {id: 13, topic: "miley syrus is my love", type: 'picture'},
    // ]
    // const topics = [
    //     {id: 0, topic: 'degradation', value: 1},
    //     {id: 1, topic: 'life of mouse', value: 2},
    //     {id: 2, topic: 'miley syrus is my love', value: 3},
    // ]
    const [topic, setTopic] = React.useState('');
    const [type, setType] = React.useState('comment');
    const [topics, setTopics] = React.useState([]);
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        getAllTopics().then(data => setTopics(data));
        loadItems();
    }, [])

    const loadItems =()=>{
        let newItems = [];
        topics.map((value, id) => {
            newItems.push({id: id, topic: value.theme, type: "post"});
            newItems.push({id: id, topic: value.theme, type: "comment"});
            newItems.push({id: id, topic: value.theme, type: "picture"});
        });
        setItems(newItems)
    }
    const topicChange = (event) => {
        setTopic(event.target.value);
        if(items.length<=0){
            loadItems();
        }
    };

    const typeChange = (event) => {
        setType(event.target.value);
        if(items.length<=0){
            loadItems();
        }
    };

    return (
        <Grid container>
            <Grid container justifyContent={"start"} m={0} pt={3} spacing={4}>
                <Grid item> </Grid>
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
                            <MenuItem value={"comment"}>Комментарии</MenuItem>
                            <MenuItem value={"post"}>Посты</MenuItem>
                            <MenuItem value={"picture"}>Картинки</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>

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
                            <MenuItem value={"all"}>
                                <em>Все</em>
                            </MenuItem>
                            {topics.map((item) => <MenuItem key={item.id} value={item.theme}>{item.theme}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

            </Grid>

            <Grid container spacing={4} pt={3}>
                {items.filter(item => topic === "all" || topic === "" ? true : item.topic === topic)
                    .filter(item => item.type === type)
                    .map((item) =>
                        <Grid item>
                            <CustomCard key={item.id} id={item.id} topic={item.topic} type={item.type}/>
                        </Grid>
                    )}

            </Grid>
        </Grid>
    );
};

export default Main;
