import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import AddServices from "../Pages/AllServices/AddServices"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup"

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/addService',
                element:<AddServices></AddServices>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
])

export default route