import Qcard from "../components/Qcard";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import Box from "@mui/material/Box";
import {Stack, Typography} from "@mui/material";
import React, {useContext, useEffect} from "react";
import {MAIN_ROUTE} from "../utils/consts";
import {useHistory, useLocation} from 'react-router-dom';
import {getAllPicturesThemes, getAllUserMarkedPictures, saveMarkedPictures} from '../http/pictures_api'
import {getAllCommentsThemes, getAllUserMarkedComments, saveMarkedComments} from '../http/comments_api'
import {getAllPostsThemes, getAllUserMarkedPosts, saveMarkedPosts} from '../http/posts_api'
import {getUserByEmail} from "../http/users_api";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
// const pic = "/Users/daana/Projects/front_crowdsource/src/store/pic.jpg";
const Questionnaire = () => {
    const [items, setItems] = React.useState([]);
    const [markedItems, setMarkedItems] = React.useState([]);
    const [unmarkedItems, setUnmarkedItems] = React.useState([]);
    const [itemsNumber, setItemsNumber] = React.useState('');
    const [chunk, setChunk] = React.useState([]);
    const [init, setInit] = React.useState(true);
    const [checkboxValues, setCheckboxValues] = React.useState({});
    const {state} = useLocation();
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const history = useHistory();
    const hide = {
        display: "none"
    }


    useEffect(() => {
        getItems(state.type, state.topic);
        getUserByEmail(user.email).then(data => {
            getMarkedItems(state.type, data.id);
        })
    }, [])


    const getItems = async (type, topic) => {
        switch (type) {
            case"comment":
                await getAllCommentsThemes(topic.id).then(data => setItems(data));
                break;
            case "post":
                await getAllPostsThemes(topic.id).then(data => setItems(data));
                break;
            case "picture":
                await getAllPicturesThemes(topic.id).then(data => setItems(data));
                break;
            default:
                break;
        }
    }

    const getMarkedItems = async (type, userId) => {
        switch (type) {
            case"comment":
                await getAllUserMarkedComments(userId).then(data => setMarkedItems(data));
                break;
            case "post":
                await getAllUserMarkedPosts(userId).then(data => setMarkedItems(data));
                break;
            case "picture":
                await getAllUserMarkedPictures(userId).then(data => setMarkedItems(data));
                break;
            default:
                break;
        }
    }

    const renderTitle = (type) => {
        switch (type) {
            case"comment":
                return "??????????????????????";
            case "post":
                return "??????????";
            case "picture":
                return "????????????????";
            default:
                return undefined;
        }
    }

    const renderSelect = (type) => {
        switch (type) {
            case"comment":
                return "????????????????????????";
            case "post":
                return "????????????";
            case "picture":
                return "????????????????";
            default:
                return undefined;
        }
    }

    const getUnmarkedItems = (n) => {
        let currentUnmarkedItems = [];
        if (markedItems?.length > 0) {
            currentUnmarkedItems = items.filter((el) => {
                return !markedItems.find((f) => {
                    return f.commentId === el.id;
                })
            });
        } else {
            currentUnmarkedItems = items;
        }
        setUnmarkedItems(currentUnmarkedItems)

        if (currentUnmarkedItems.length > 0) {
            setChunk(currentUnmarkedItems.slice(0, n));
            currentUnmarkedItems.splice(0, n);
        }

    }

    const makeChunk = async () => {
        if (unmarkedItems.length > 0) {
            setChunk(unmarkedItems.slice(0, itemsNumber));
            unmarkedItems.splice(0, itemsNumber);
        }
        let dataToSend = Object.keys(checkboxValues).map(key => checkboxValues[key]);
        switch (state.type) {
            case"comment":
                await saveMarkedComments(dataToSend);
                break;
            case "post":
                await saveMarkedPosts(dataToSend);
                break;
            case "picture":
                await saveMarkedPictures(dataToSend);
                break;
            default:
                return undefined;
        }

    }

    const finish = async () => {
        let dataToSend = Object.keys(checkboxValues).map(key => checkboxValues[key])
        switch (state.type) {
            case"comment":
                await saveMarkedComments(dataToSend);
                break;
            case "post":
                await saveMarkedPosts(dataToSend);
                break;
            case "picture":
                await saveMarkedPictures(dataToSend);
                break;
            default:
                return undefined;
        }
        history.push(MAIN_ROUTE);
    }

    const itemsNumberChange = (event) => {
        const n = event.target.value;
        setItemsNumber(n);
        setInit(false);
        getUnmarkedItems(n);
    };

    const checkedMarks = async (marks) => {
        const userId = await getUserByEmail(user.email).then(data => {
            return data.id;
        });

        switch (state.type) {
            case"comment":
                checkboxValues[marks["commentId"]] = Object.assign(marks, {"userId": userId, "themeId": state.topic.id});
                break;
            case "post":
                checkboxValues[marks["postId"]] = Object.assign(marks, {"userId": userId, "themeId": state.topic.id});
                break;
            case "picture":
                checkboxValues[marks["pictureId"]] = Object.assign(marks, {"userId": userId, "themeId": state.topic.id});
                break;
            default:
                break;
        }

    }

    return (
        <Box mb={6}>
            <Box m={2}>
                <Button variant={"outlined"} color={"primary"} onClick={() => history.push(MAIN_ROUTE)}> ??????????</Button>
                <Typography gutterBottom variant="h5" component="div"
                            mt={3}> ?????????????????? {renderTitle(state.type)} </Typography>
                <FormControl fullWidth mt={3} style={!init ? hide : {}}>
                    <InputLabel id="type">???????????????? ???????????????????? {renderSelect(state.type)}</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        value={itemsNumber}
                        label="Type"
                        onChange={itemsNumberChange}

                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={40}>40</MenuItem>

                    </Select>
                </FormControl>
            </Box>

            {state.type === "picture" ?
                <Grid container>
                    {chunk.map((item, number) =>
                        <Grid item xs={4}>
                            <Qcard number={number + 1} key={item.id} id={item.id} type={state.type} element={item} checkedMarks={checkedMarks}/>
                        </Grid>
                    )}

                </Grid> :
                <Grid>
                    {chunk.map((item, number) =>
                        <Stack>
                            <Qcard number={number + 1} key={item.id} id={item.id} type={state.type} element={item}
                                   checkedMarks={checkedMarks}/>
                        </Stack>
                    )}

                </Grid>}


            <Grid container justifyContent={"flex-end"} style={init ? hide : {}}>
                <Box mb={12}>
                    <Button variant={"contained"} color={"primary"} onClick={makeChunk}> ????????????????????</Button>
                </Box>
                <Box mb={12} ml={2}>
                    <Button variant={"outlined"} color={"primary"} onClick={finish}> ??????????????????</Button>
                </Box>
            </Grid>
        </Box>
    )
};
export default Questionnaire;
