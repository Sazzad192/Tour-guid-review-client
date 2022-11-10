import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import AddServices from "../Pages/AllServices/AddServices"
import ServiceDetails from "../Pages/AllServices/ServiceDetails"
import ServicesAll from "../Pages/AllServices/ServicesAll"
import Blog from "../Pages/Blog/Blog"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Review from "../Pages/Review/Review"
import Signup from "../Pages/Signup/Signup"
import Update from "../Pages/Update/Update"

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
                path:'/services',
                element:<ServicesAll></ServicesAll>,
                loader: () => fetch('http://localhost:5000/servicesAll')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/review',
                element: <Review></Review>,
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`http://localhost:5000/update/${params.id}`)
            }
        ]
    }
])

export default route