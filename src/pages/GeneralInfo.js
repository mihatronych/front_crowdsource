import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Grid} from "@mui/material";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useEffect} from "react";
import {getAllTopics} from "../http/topics_api";
import {getAllCommentsWithCount} from "../http/comments_api";
import {getAllPostsWithCount} from "../http/posts_api";

function createData(content, peopleToxic, peopleNToxic, machineToxic, machineNToxic) {
    return { content, peopleToxic, peopleNToxic, machineToxic, machineNToxic };
}

const rows = [
    createData('Идейные соображения высшего порядка, а также начало повседневной ' +
        'работы по формированию позиции, в своём классическом ' +
        'представлении, допускает внедрение ' +
        'благоприятных перспектив.', 7, 93, 15, 85),
    createData('Фильм ну полное дерьмище, я отвечаю, ' +
        'создатели могут пойти и ' +
        'закопать себя прямо сейчас', 87, 13, 92, 8),
    createData('Если честно, то ты чертовски не прав' +
        ' в этом вопросе, го в лс', 31, 69, 78, 22),
    createData('В частности, разбавленное изрядной долей эмпатии, рациональное ' +
        'мышление напрямую зависит ' +
        'от глубокомысленных рассуждений.', 2, 98, 7, 93),
    createData('Фильм я не смотрела, но ' +
        'название и не вызывает желание посмотреть', 20, 80, 15, 85),
];

export default function BasicTable() {
    const [topicSelect, setTopicSelect] = React.useState('');
    const [typeSelect, setTypeSelect] = React.useState('post');
    const [topics, setTopics] = React.useState([]);
    const [itemsToShow, setItemsToShow] = React.useState([]);
    const [content, setContent] = React.useState([]);
    const [filteredContent, setFilteredContent] = React.useState([]);

    useEffect(async () => {
        getAllTopics().then(data => setTopics(data));
        await loadContent();
    }, []);

    const filteringContent = async (rows) => {
        const theme = getTopicIdByName(topicSelect)
        console.log(typeSelect)
        console.log(theme)
        console.log(content)
        if (theme)
        {

            await setFilteredContent(rows.filter(item => item.themeId == theme.id))
        }
        console.log(rows)
        await setFilteredContent(rows)
    };

    const loadContent = async () => {
        console.log(typeSelect)

        switch (typeSelect) {
            case 'comment':
                await loadComments();
                break;
            case 'post':
                await loadPosts();
                break;
        }
    };

    const loadComments = async () => {
        const loadedComments = await getAllCommentsWithCount();
        setContent(loadedComments)
        await filteringContent(loadedComments)
    };

    const loadPosts = async () => {
        const loadedPosts = await getAllPostsWithCount();
        console.log(loadedPosts)
        setContent(loadedPosts)
        await filteringContent(loadedPosts)
    };

    const topicChange = async(event) => {
        setTopicSelect(event.target.value);
        await filteringContent(content)
    };

    const typeChange = async (event) => {
        await setTypeSelect(event.target.value);
        console.log(event.target.value)
        await loadContent();
    };

    const getTopicIdByName = (name) =>{
        return topics.find(el => el.theme === name)
    }

    return (
        <div>
            <Grid container justifyContent={"space-between"} alignItems={'center'} m={0} pt={3} spacing={4}>
                <Grid item xs={5}>
                    <Grid item >
                        <FormControl fullWidth>
                            <InputLabel id="type">Тип</InputLabel>
                            <Select
                                labelId="type"
                                id="type"
                                value={typeSelect}
                                label="Type"
                                onChange={typeChange}
                            >
                                <MenuItem value={"comment"}>Комментарии</MenuItem>
                                <MenuItem value={"post"}>Посты</MenuItem>
                                {/*<MenuItem value={"picture"}>Картинки</MenuItem>*/}

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item >
                        <FormControl fullWidth>
                            <InputLabel id="topic">Тема</InputLabel>
                            <Select
                                labelId="topic"
                                id="topic"
                                value={topicSelect}
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

                <Grid item color={'primary'} justify='flex-end'>
                    <Paper variant="outlined" style={{padding: 10}}>
                        <p style={{ fontSize: 26, fontWeight: 'bold'}}>72%</p>
                        <p>Точность классификатора</p>
                    </Paper>
                </Grid>

            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="left">Содержание</TableCell>
                            <TableCell align="center">% чел. за  токсик</TableCell>
                            <TableCell align="center">% чел. против  токсик</TableCell>
                            <TableCell align="center">Токсик автокласс, %</TableCell>
                            <TableCell align="center">Нетоксик автокласс, %</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredContent.length > 0 && filteredContent.map((row, index) => (
                            <TableRow
                                key={'table_row_' + index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {(index  + 1)}
                                </TableCell>
                                <TableCell align="left">{ row.text }</TableCell>
                                <TableCell align="center">{ row.toxic1 }</TableCell>
                                <TableCell align="center">{ 100 - (row.toxic1) }</TableCell>
                                <TableCell align="center">{ Math.round((row.toxic2 * 100), 2) }</TableCell>
                                <TableCell align="center">{ 100 - Math.round(row.toxic2 * 100, 2) }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
