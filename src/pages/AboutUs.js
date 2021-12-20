import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-scroll py-10">
            <div className="bg-primary w-3/4 py-3 px-11 flex flex-1 items-center rounded-xl">
                <div className="py-5">
                    <h2 className="text-5xl font-bold mb-5">CrowdSource</h2>
                    <p className="text-2xl">Спасибо, что помогаете делать общение в социальных сетях безопасным.
                        Внесите свой вклад в развитие интернет без ругани и злословия!</p>
                </div>
            </div>
            <div className="bg-white w-3/4 py-3 px-11 flex flex-1 items-center">
                <div className="py-5">
                    <h2 className="text-5xl font-bold mb-5">Что нужно делать?</h2>
                    <p className="text-2xl">Все просто!</p>
                    <p className="text-2xl">Помогите нам собрать супер большой датасет данных с разметкой
                        их токсичности, которые в последствии будут использованы
                        для аналитики и машинного обучения.</p>
                </div>
            </div>
            <div className="bg-primary w-3/4 py-3 px-11 flex flex-1 items-center rounded-xl">
                <div className="py-5">
                    <h2 className="text-5xl font-bold mb-5">Хотите попробовать?</h2>
                    <p className="text-2xl">Авторизируйтесь!</p>
                    <p className="text-2xl">Войдите при помощи учетной записи Google и у вас появится возможность поучаствовать в нашем проекте.
                        Не волнуйтесь, мы не храним ваши данные в нашем сервисе, так что это   безопасно)</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
