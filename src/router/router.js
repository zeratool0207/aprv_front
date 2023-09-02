import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Insert from "../pages/Insert";
import Update from "../pages/Update";
import ReprAprv from "../pages/ReprAprv";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <App />
            ),
            children: [
                {
                    path: '/',
                    element: <Login />
                },
                {
                    path: '/main',
                    element: <Main />
                },
                {
                    path: '/insert',
                    element: <Insert />
                },
                {
                    path: '/update',
                    element: <Update />
                },
                {
                    path: '/reprAprv',
                    element: <ReprAprv />
                },
            ]
        }
    ]
)