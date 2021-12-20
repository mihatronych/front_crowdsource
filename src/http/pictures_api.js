import {$host} from "./index";

export const getAllPicturesThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/picture/'+themeId);
    return data;
}
