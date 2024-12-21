import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import OverView from "../pages/dashboard/OverView";
import AddProduct from "../pages/dashboard/seller/AddProduct";
import DashboardLayout from "../layouts/DashboardLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <></>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/overView",
                element: <OverView></OverView>
            },
            {
                path: "/dashboard/addProduct",
                element: <AddProduct></AddProduct>
            },
        ]
    }
]);

export default routes;