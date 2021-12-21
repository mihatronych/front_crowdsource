import {$host} from "./index";

export const getAllPostsThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/post/'+themeId);
    return data;
}

export const getAllUserMarkedPosts = async (userId) =>{
    const {data} =  await $host.get('/api/postMark/?userId='+userId);
    return data;
}
