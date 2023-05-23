import {RouterProvider, createBrowserRouter, Outlet, Navigate  } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useAuth } from '../contexts/AuthContext'
import GuestHome from '../pages/GuestHome'


export default function Router() {
  const {user} = useAuth()
 
  const router = createBrowserRouter([
    {
        path: '/',
        element : (
            <>
            <Header />
            <Outlet />
            </>
        ),
        errorElement: <Navigate to='/login' />,
        children : [
            {
                path: '/',
                element: user? <Home /> : <GuestHome />
            },
            {
                path: 'login',
                element: user? <Navigate to='/' /> : <Login />
            },
            {
                path: 'register',
                element: user ? <Navigate to='/' /> : <Register />
            },
        ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}
