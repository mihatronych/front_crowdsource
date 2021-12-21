import {$host} from "./index";

export const getAllCommentsThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/comment/?themeId='+themeId);
    return data;
}

export const getAllUserMarkedComments = async (userId) =>{
    const {data} =  await $host.get('/api/commentMark/?userId='+userId);
    return data;
}

export const saveMarkedComments = async (value) =>{
    const {data} =  await $host.post('/api/commentMark/', {values:value});
    return data;
}
