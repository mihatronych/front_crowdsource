import React, {useState} from 'react';

const Markup = () => {
    const [textsCount, setTextsCount] = useState()

    const loadTexts = () =>  {
        setTextsCount(25)
    }

    return (
        <div className="h-full p-5 flex items-center justify-center">
            <div className="h-full w-full py-10">
                <div className="form-control mb-4 w-72">
                    <label className="label">
                        <span className="label-text text-xl font-bold text-gray-800">Количество текстов</span>
                    </label>
                    <div className="flex space-x-2">
                        <input type="number" placeholder="25"
                               className="w-full input border-primary rounded-box bg-white border-2 focus:outline-none focus:ring-0"/>
                        <button className="btn btn-primary rounded-box" onClick={loadTexts}>Загрузить</button>
                    </div>
                </div>

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
                        textsCount && (
                            <React.Fragment>
                                <tr>

                                    <td>
                                        1
                                    </td>
                                    <td>
                                        <p className="whitespace-normal">
                                            Вот вам яркий пример современных тенденций - социально-экономическое развитие
                                            является качественно новой ступенью существующих финансовых
                                            и административных условий.
                                        </p>
                                    </td>
                                    <th className="text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox"/>
                                        </label>
                                    </th>
                                    <th className="text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox"/>
                                        </label>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        2
                                    </td>
                                    <td>
                                        <p className="whitespace-normal">
                                            Прежде всего, глубокий уровень погружения однозначно фиксирует
                                            необходимость распределения внутренних резервов
                                            и ресурсов.
                                        </p>
                                    </td>
                                    <th className="text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox"/>
                                        </label>
                                    </th>
                                    <th className="text-center">
                                        <label>
                                            <input type="checkbox" className="checkbox"/>
                                        </label>
                                    </th>
                                </tr>
                            </React.Fragment>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Markup;
