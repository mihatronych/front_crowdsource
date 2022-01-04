import Box from "@mui/material/Box";
import {Button, FormControl, InputLabel, MenuItem, Select, Tooltip} from "@material-ui/core";
import {MAIN_ROUTE} from "../utils/consts";
import {Grid, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import * as XLSX from 'xlsx';
import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import CardMedia from "@mui/material/CardMedia";
import {getAllTopics} from "../http/topics_api";
import {saveComments, saveMarkedComments} from "../http/comments_api";
import {saveMarkedPosts, savePosts} from "../http/posts_api";
import {saveMarkedPictures, savePictures} from "../http/pictures_api";

const Add = () => {
    const history = useHistory();
    const [typeSelect, setTypeSelect] = useState('comment');
    const [topicSelect, setTopicSelect] = React.useState('');
    const [topics, setTopics] = React.useState([]);
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [imgUrl, setImgUrl] = useState('');
    const [isReady, setIsReady] = useState(false);
    const renderName = (type) => {
        switch (type) {
            case"comment":
                return "комментарии";
            case "post":
                return "посты";
            case "picture":
                return "картинку";
            default:
                return undefined;
        }
    }

    const typeChange = (event) => {
        setTypeSelect(event.target.value);
        setIsReady(false);
        setImgUrl('');
        setData([]);
        setColumns([]);

    }

    const topicChange = (event) => {
        setTopicSelect(event.target.value);
    };

    useEffect(() => {
        getAllTopics().then(data => setTopics(data));
    }, [])


    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (headers && row.length == headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] == '"')
                            d = d.substring(1, d.length - 1);
                        if (d[d.length - 1] == '"')
                            d = d.substring(d.length - 2, 1);
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d;
                    }
                }

                // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);
                }
            }
        }

        // prepare columns list from headers
        const columns = headers.map(c => ({
            name: c,
            selector: c,
        }));

        setData(list);
        setColumns(columns);
    }

    const handleFileUpload = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        if(typeSelect==="picture"){
            reader.onload = (evt) => {
                setImgUrl(evt.target.result);
            }
            if(!file)
                return;
            reader.readAsDataURL(file);
        }
        else {

            reader.onload = (evt) => {
                /* Parse data */
                const bstr = evt.target.result;
                const wb = XLSX.read(bstr, {type: 'binary'});
                /* Get first worksheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
                processData(data);
            };
            if(!file)
                return;
            reader.readAsText(file);
        }

        if (topicSelect && typeSelect){
            setIsReady(true);
        }

    }

    const save = async () => {
        // switch (typeSelect) {
        //     case"comment":
        //         await saveComments();
        //         break;
        //     case "post":
        //         const dataToSend = [];
        //         data.map(value => dataToSend.push({text:value[0], themeId:topicSelect}));
        //         await savePosts(dataToSend);
        //         break;
        //     case "picture":
        //         await savePictures();
        //         break;
        //     default:
        //         return undefined;
        // }
        // history.push(MAIN_ROUTE);
    }

    return(
        <Box m={2} height="100vh">
            <Button variant={"outlined"} color={"primary"} onClick={() => history.push(MAIN_ROUTE)}> Назад</Button>
            <FormControl fullWidth mt={3}>
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
                    <MenuItem value={"picture"}>Картинки</MenuItem>

                </Select>
            </FormControl>
            <FormControl fullWidth mt={3}       >
                <InputLabel id="topic">Тема</InputLabel>
                <Select
                    labelId="topic"
                    id="topic"
                    value={topicSelect}
                    label="Topic"
                    onChange={topicChange}
                >
                    {topics.map((item) => <MenuItem key={item.id} value={item.theme}>{item.theme}</MenuItem>)}
                </Select>
            </FormControl>
            {/*<Typography gutterBottom variant="h5" component="div"*/}
            {/*            mt={3}> Добавить {renderName(typeSelect)} </Typography>*/}
            <Box mt={2}>
                <Tooltip title={typeSelect==="picture"? "Загрузите мем, можно не смешной, мы за это не осудим" : "Загрузите csv файл "} placement="bottom-start">
                <Button
                    variant="contained"
                    component="label"
                    disabled={!topicSelect&&typeSelect}
                >
                    Загрузить {renderName(typeSelect)}
                    <input
                        accept={typeSelect==="picture"? "image/*": ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}
                        type="file"
                        onChange={handleFileUpload}
                        hidden
                    />
                </Button>
                </Tooltip>
                <Button variant={"contained"} color={"primary"} style={{marginLeft:"10px"}} disabled={!isReady} onClick={save}> Добавить </Button>

            </Box>
            <Box mb={12} mt={3} paddingBottom="10vh">
            {typeSelect === "picture" ?
                <CardMedia
                    component="img"
                    image = {imgUrl}
                    alt="meme"
                />:
                <DataTable
                    pagination
                    highlightOnHover
                    columns={columns}
                    data={data}
                />
            }
            </Box>


        </Box>
    );
}

export default Add;

