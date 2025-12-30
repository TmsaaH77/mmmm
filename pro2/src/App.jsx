import Shop from './Pages/Shop/Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense , lazy, useEffect } from 'react';
import Loader from './assets/Lotti Files/skipping TIME.json'
import {useLottie} from "lottie-react";
import { useAuth } from './Zustand/AuthSlice';



const Layout = lazy( ()=> import('./Layout/Layout') )
const Home = lazy( ()=> import('./Pages/Home/Home') )
const Contact = lazy( ()=> import('./Pages/Contact/Contact') )
const Rejester = lazy( ()=> import('./Pages/Auth/Rejester') )
const Login = lazy( ()=> import('./Pages/Auth/Login') )
const WishList = lazy( ()=> import('./Pages/WishList/WishList') )
const Cart = lazy( ()=> import('./Pages/Cart/Cart') )
const Blogs = lazy( ()=> import('./Pages/Blogs') )



function App() {
const initiateAuth = useAuth( s => s.initiateAuth )
useEffect(()=>{
      initiateAuth()
},[] )

const { View } = useLottie({animationData: Loader})

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={View} > <Layout /> </Suspense>,
      children: [
        { index: true, element:  <Suspense fallback={View}> <Home /> </Suspense>  },
      ],
    },
    {
      path: '/rejester',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={View}> <Rejester/> </Suspense> },
      ],
    },
    {
      path: '/login',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={View}> <Login/> </Suspense> },
      ],
    },
    {
      path: '/shop',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={View}> <Shop /> </Suspense> },
      ],
    },
    {
      path: '/contact',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={View}> <Contact /> </Suspense> },
      ],
    },
    {
      path: '/wishlist',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={View}> <WishList /> </Suspense> },
      ],
    },
    {
      path: '/cart',
      element: <Layout />,
      children: [
        { index: true, element:  <Suspense fallback={View}> <Cart /> </Suspense>},
      ],
    },
    {
      path: '/blog',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={View}> <Blogs /> </Suspense> },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
