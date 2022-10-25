import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Main from './layout/Main';

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element : <Home></Home>
                },
                {
                    path: '/home',
                    element : <Home></Home>
                },
                {
                    path: '/login',
                    element : <Login></Login>
                },
                {
                    path: '/signup',
                    element : <Signup></Signup>
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={routes}>

            </RouterProvider>
        </div>
    );
};

export default Routes;