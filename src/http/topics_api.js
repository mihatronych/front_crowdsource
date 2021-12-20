import {$host} from "./index";

export const getAllTopics = async () =>{
    const {data} =  await $host.get('/api/theme/');
    return data;
}
