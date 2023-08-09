import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Main from "../pages/Main";
import Login from "../pages/Login";

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
            ]
        }
    ]
)