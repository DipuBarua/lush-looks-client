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
import MyProducts from "../pages/dashboard/seller/MyProducts";
import MyWishlist from "../pages/dashboard/buyer/MyWishlist";
import PrivateRoute from "./private/PrivateRoute";
import SellerRoute from "./private/SellerRoute";
import BuyerRoute from "./private/BuyerRoute";
import EditProduct from "../pages/dashboard/seller/EditProduct";
import AllUsers from "../pages/dashboard/admin/AllUsers";

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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard/overView",
                element: <OverView></OverView>
            },
            {
                path: "/dashboard/allUsers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/dashboard/addProduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myProducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/editProduct",
                element: <SellerRoute><EditProduct></EditProduct></SellerRoute>
            },
            {
                path: "/dashboard/myWishlist",
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
        ]
    }
]);

export default routes;