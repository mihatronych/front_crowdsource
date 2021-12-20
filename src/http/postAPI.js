import {$authHost, $host} from "../http";

export const getPosts = async (count) => {
    //const { data } = await $authHost.get('/post', { params: { count }})
    return [
        {
            id: 1,
            text: 'В своём стремлении повысить качество жизни, они забывают,' +
                ' что разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует' +
                ' необходимость как самодостаточных,' +
                ' так и внешне зависимых концептуальных решений.'
        },
        {
            id: 2,
            text: 'Банальные, но неопровержимые выводы, а также представители ' +
                'современных социальных резервов указаны как претенденты на роль ключевых факторов.'
        }
    ]
}

export const sendMarkedPosts =  async (markedPosts)=> {
    const { data } = await $authHost.post('/postMark', markedPosts)
}

export const getUserMarkedPosts = async (userId) => {
    const { data } =  await $authHost.get('/postMark', { params: { userId } })
}
