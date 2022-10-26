import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from '../components/Aside/Details/Details';
import Blog from '../components/Blog/Blog';
import Faq from '../components/Blog/Faq';
import Checkout from '../components/Checkout/Checkout';
import Courses from '../components/Courses/Courses';
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
						element: <Home></Home>,
					},
					{
						path: '/home',
						element: <Home></Home>,
					},
					{
						path: '/faq',
						element: <Faq></Faq>,
					},
					{
						path: '/blog',
						element: <Blog></Blog>,
					},
					{
						path: '/login',
						element: <Login></Login>,
					},
					{
						path: '/signup',
						element: <Signup></Signup>,
					},
					{
						path: '/courses',
						element: <Courses></Courses>,
						loader: () =>
							fetch(
								`https://assignment10-server-side-kamruzzaman22874.vercel.app/courses`
							),
					},

					{
						path: '/course/:id',
						element: <Details></Details>,
						loader: ({ params }) =>
							fetch(
								`https://assignment10-server-side-kamruzzaman22874.vercel.app/course/${params.id}`
							),
					},
					{
						path: '/course/checkout/:id',
						loader: ({ params }) =>
							fetch(
								`https://assignment10-server-side-kamruzzaman22874.vercel.app/course/${params.id}`
							),
						element : <Checkout></Checkout>
					}
				],
			},
		]);

    return (
        <div>
            <RouterProvider router={routes}>

            </RouterProvider>
        </div>
    );
};

export default Routes;