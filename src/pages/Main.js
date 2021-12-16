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
        {id: 4, topic: "life of mouse", type: 'picture'},
        {id: 4, topic: "life of mouse", type: 'comment'},
        {id: 4, topic: "life of mouse", type: 'post'},
        {id: 4, topic: "life of mouse", type: 'picture'},
        {id: 4, topic: "miley syrus is my love", type: 'picture'},
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
        <div className="flex-grow">
            <h3 className="text-red-300">IT WORKSs</h3>
        </div>
    );
};

export default Main;
