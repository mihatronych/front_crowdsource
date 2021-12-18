import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {getPosts} from "../api/postsAPI";


const Markup = () => {
    const { register, handleSubmit } = useForm();
    const { register: markup, handleSubmit: handleMarkupSubmit } = useForm();
    const [posts, setPosts] = useState([])

    const loadTexts = async (data) =>  {
        const loadedPosts = await getPosts(data.count)
        setPosts(loadedPosts)
    }
    const sendMarkup = async (data) =>  {
        const preparedData = data.markup.map( (markup, index) =>
        { return { postId: posts[index].id, toxic: markup.toxic, toxicN: markup.toxicN } })
        console.log(preparedData)
    }


    return (
        <div className="h-full p-5 flex items-center justify-center">
            <div className="h-full w-full py-10">
                <form onSubmit={handleSubmit(loadTexts)}>
                    <div className="form-control mb-4 w-72">
                        <label className="label">
                            <span className="label-text text-xl font-bold text-gray-800">Количество текстов</span>
                        </label>
                        <div className="flex space-x-2">
                            <input type="number" placeholder="25"
                                   className="w-full input border-primary rounded-box bg-white border-2 focus:outline-none focus:ring-0"
                                   {...register('count',  {required: true})}/>
                            <button type="submit" className="btn btn-primary rounded-box" onClick={loadTexts}>Загрузить</button>
                        </div>
                    </div>
                </form>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Текст</th>
                        <th>Токсичный текст</th>
                        <th>Токсичный текст по критерию N</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        posts.length > 0 && posts.map( (post, index) => {
                            return(
                                <tr key={'post_row_' +  post.id}>
                                    <td>{ index + 1}</td>
                                    <td><p className="whitespace-normal">{ post.text }</p></td>
                                    <th className="text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox" {...markup(`markup[${index}].toxic`)}/>
                                        </label>
                                    </th>
                                    <th className="text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox" {...markup(`markup[${index}].toxicN`)}/>
                                        </label>
                                    </th>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button className="btn btn-primary rounded-box mt-3" onClick={handleMarkupSubmit(sendMarkup)}>Отправить</button>
            </div>
        </div>
    );
};

export default Markup;
