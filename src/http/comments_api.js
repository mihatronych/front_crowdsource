import {$host} from "./index";

export const getAllCommentsThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/comment/?themeId='+themeId);
    return data;
}
