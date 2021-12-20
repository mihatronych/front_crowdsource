import {$host} from "./index";

export const getAllPostsThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/post/'+themeId);
    return data;
}
