import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";
import { MdAddCard, MdOutlineInventory2 } from "react-icons/md";
import { FaCartPlus, FaUsers } from "react-icons/fa6";


// Dynamic routes 

const adminRoutes = [
    {
        id: 1,
        route: "/dashboard/allUsers",
        title: "All Users",
        icon: <FaUsers />
    },
]

const sellerRoutes = [
    {
        id: 1,
        route: "/dashboard/addProduct",
        title: "Add Product",
        icon: <MdAddCard />
    },
    {
        id: 2,
        route: "/dashboard/myProducts",
        title: "My Products",
        icon: <MdOutlineInventory2 />
    },
]

const buyerRoutes = [
    {
        id: 1,
        route: "/dashboard/myWishlist",
        title: "My Wishlist",
        icon: <FaCartPlus />
    },
]



const SideBar = () => {
    const userData = useUserData();
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/');
    }

    return (
        <div className=" bg-slate-200 border-r-2 border-slate-500 min-h-full">
            <h1 className=" text-center text-2xl font-bold text-slate-900 p-4 mb-2">Gadget Shop</h1>
            <ul className=" flex flex-col gap-4 p-4">
                <li className=" btn rounded-none px-2 border border-black">
                    <GrOverview />
                    <NavLink to={'/dashboard/overview'}>Overview</NavLink>
                </li>

                {
                    userData.role === 'seller' && sellerRoutes.map(route => <li
                        key={route.id}
                        className=" btn rounded-none px-2 border border-black">
                        <NavLink to={route.route} className='flex gap-2'>
                            {route.icon}
                            {route.title}
                        </NavLink>
                    </li>)

                }

                {
                    userData.role === 'buyer' && buyerRoutes.map(route => <li
                        key={route.id}
                        className=" btn rounded-none px-2 border border-black">
                        <NavLink to={route.route} className='flex gap-2'>
                            {route.icon}
                            {route.title}
                        </NavLink>
                    </li>)

                }

                {
                    userData.role === 'admin' && adminRoutes.map(route => <li
                        key={route.id}
                        className=" btn rounded-none px-2 border border-black">
                        <NavLink to={route.route} className='flex gap-2'>
                            {route.icon}
                            {route.title}
                        </NavLink>
                    </li>)

                }

                <li className=" btn rounded-none px-2 border border-black">
                    <NavLink to={'/'} className='flex gap-2'>
                        <FaHome />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => handleLogOut()}>
                        <button className=" btn btn-outline rounded-none text-white w-full bg-slate-500">
                            <CiLogout></CiLogout>
                            Log Out</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;

