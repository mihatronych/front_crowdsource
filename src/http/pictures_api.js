import {$host} from "./index";

export const getAllPicturesThemes = async (themeId) =>{
    const {data} =  await $host.get('/api/picture/?themeId='+themeId);
    return data;
}

export const getAllUserMarkedPictures = async (userId) =>{
    const {data} =  await $host.get('/api/pictureMark/?userId='+userId);
    return data;
}

export const saveMarkedPictures = async (value) =>{
    const {data} =  await $host.post('/api/pictureMark/', {values:value});
    return data;
};

export const getAllPictureWithCount = async () => {
    const {data} = await $host.get('/api/picture/getAllWithCount/');
    return data
};

export const savePictures = async (value) =>{
    const {data} =  await $host.post('/api/picture/', value,{
        headers: {
            'Content-Type': `multipart/form-data;`,
        }
    });
    return data;
}
