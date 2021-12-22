
// const AboutUs = () => {
//     return (
//         <div className="w-full h-full flex flex-col items-center overflow-y-scroll py-10">
//             <div className="bg-primary w-3/4 py-3 px-11 flex flex-1 items-center rounded-xl">
//                 <div className="py-5">
//                     <h2 className="text-5xl font-bold mb-5">CrowdSource</h2>
//                     <p className="text-2xl">Спасибо, что помогаете делать общение в социальных сетях безопасным.
//                         Внесите свой вклад в развитие интернет без ругани и злословия!</p>
//                 </div>
//             </div>
//             <div className="bg-white w-3/4 py-3 px-11 flex flex-1 items-center">
//                 <div className="py-5">
//                     <h2 className="text-5xl font-bold mb-5">Что нужно делать?</h2>
//                     <p className="text-2xl">Все просто!</p>
//                     <p className="text-2xl">Помогите нам собрать супер большой датасет данных с разметкой
//                         их токсичности, которые в последствии будут использованы
//                         для аналитики и машинного обучения.</p>
//                 </div>
//             </div>
//             <div className="bg-primary w-3/4 py-3 px-11 flex flex-1 items-center rounded-xl">
//                 <div className="py-5">
//                     <h2 className="text-5xl font-bold mb-5">Хотите попробовать?</h2>
//                     <p className="text-2xl">Авторизируйтесь!</p>
//                     <p className="text-2xl">Войдите при помощи учетной записи Google и у вас появится возможность поучаствовать в нашем проекте.
//                         Не волнуйтесь, мы не храним ваши данные в нашем сервисе, так что это   безопасно)</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutUs;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import {AppBar} from "@material-ui/core";


export default function AboutUs() {
    return (
        <Grid mt={10} xs={9} mx={'auto'}>
            <Card variant="outlined" sx={{ marginBottom: 5 }}>
                <CardContent>
                <Typography variant="h3" component="div">
                    CrowdSource
                </Typography>
                <Typography variant="body1">
                    Спасибо, что помогаете делать общение в социальных сетях безопасным.
                    Внесите свой вклад в развитие интернет без ругани и злословия!
                </Typography>
            </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom: 5}}>
                <CardContent>
                <Typography variant="h3" component="div">
                    Что нужно делать?
                </Typography>
                <Typography variant="body1">
                    Все просто!
                </Typography>
                <Typography variant="body1">
                    Помогите нам собрать супер большой датасет данных с разметкой
                    их токсичности, которые в последствии будут использованы
                    для аналитики и машинного обучения.
                </Typography>
            </CardContent>
            </Card>
            <Card variant="outlined" sx={{ marginBottom: 5 }}>
                <CardContent>
                <Typography variant="h3" component="div">
                    Хотите попробовать?
                </Typography>
                <Typography variant="body1">
                    Авторизируйтесь!
                </Typography>
                <Typography variant="body1">
                    Войдите при помощи учетной записи Google и у вас появится возможность
                    поучаствовать в нашем проекте.
                    Не волнуйтесь, мы не храним ваши данные
                    в нашем сервисе, так что это безопасно)
                </Typography>
            </CardContent>
            </Card>
        </Grid>
    );
}
