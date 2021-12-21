import {$host} from "./index";

export const getAllPicturesThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/picture/?themeId='+themeId);
    return data;
}

export const getAllUserMarkedPictures = async (userId) =>{
    const {data} =  await $host.get('/api/pictureMark/?userId='+userId);
    return data;
}
