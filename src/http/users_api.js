import {$host} from "./index";

export const getUserByEmail = async (email) =>{
    const {data} =  await $host.post('/api/user/getEmail/',{email: email});
    return data;
}

export const createUserByEmail = async (email) =>{
    const {data} =  await $host.post('/api/user/', {email:email});
    return data;
}
