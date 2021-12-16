import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './styles.css';
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import { HelmetProvider } from 'react-helmet-async';
import Menu from "./components/Menu";

require('dotenv').config()
const App = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <HelmetProvider>
            <BrowserRouter>
                <ThemeConfig>
                    <GlobalStyles />
                    <div className="h-full w-full flex">
                        <Menu/>
                        <AppRouter/>
                    </div>
                </ThemeConfig>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
