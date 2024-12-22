import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";

const DashboardLayout = () => {
    return (
        <div className="grid md:grid-cols-12 min-h-screen">
            <div className=" md:col-span-2">
                <SideBar></SideBar>
            </div>
            <div className=" md:col-span-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;