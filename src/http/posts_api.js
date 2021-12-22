import {$host} from "./index";

export const getAllPostsThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/post/?themeId='+themeId);
    return data;
}

export const getAllUserMarkedPosts = async (userId) =>{
    const {data} =  await $host.get('/api/postMark/?userId='+userId);
    return data;
}

export const saveMarkedPosts = async (value) =>{
    const {data} =  await $host.post('/api/postMark/', {values:value});
    return data;
}

export const getAllPostsWithCount = async () => {
    const {data} = await $host.get('/api/post/getAllWithCount/');
    return data
};