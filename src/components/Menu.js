import React, {useContext} from 'react';
import {ABOUT_US_ROUTE, CONTRIBUTIONS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MARKUP_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
import firebase from "firebase/compat";

function Menu(props) {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    let history = useHistory();

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        history.push(MAIN_ROUTE);
        console.log(user)
    };

    const logout = async () => {
        await auth.signOut();
        history.push(ABOUT_US_ROUTE)
    };

    return (
        <div className="w-72 bg-gray-800 flex items-center">
            <ul className="menu w-full py-3 text-white">
                <div className="text-primary text-lg font-bold px-5">
                    <span>
                        CrowdSource
                    </span>
                </div>
                {user ?
                    <React.Fragment>
                        <li className="hover:bg-gray-900">
                            <NavLink className="whitespace-nowrap" to={MAIN_ROUTE}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 mr-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Главная
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-900">
                            <NavLink to={CONTRIBUTIONS_ROUTE}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="inline-block w-5 h-5 mr-2 stroke-current" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                Мой вклад
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-900">
                            <NavLink className="whitespace-nowrap" to={MARKUP_ROUTE}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="inline-block w-5 h-5 mr-2 stroke-current" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                Разметить текст
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-900">
                            <a className="whitespace-nowrap" onClick={logout}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 mr-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Выйти
                            </a>
                        </li>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <li className="hover:bg-gray-900">
                            <NavLink className="whitespace-nowrap" to={ABOUT_US_ROUTE}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="inline-block w-5 h-5 mr-2 stroke-current" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                О нас
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-900">
                            <a onClick={login}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 mr-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Авторизация
                            </a>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    );
}

export default Menu;
