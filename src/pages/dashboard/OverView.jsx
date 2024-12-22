import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const OverView = () => {
    const { user } = useAuth();
    const userData = useUserData();

    return (
        <div >
            <Helmet>
                <title>Overview | LushLooks Dashboard</title>
            </Helmet>
            <h1 className=" text-2xl pt-7 font-bold text-center">Dashboard | Overview</h1>

            <div className=" min-h-screen flex justify-center items-center divide-x-4 gap-5">
                <div className=" w-10 rounded-full">
                    <img src={`${user?.photoURL || "/profile.png"}`} />
                </div>

                <div className=" p-5">
                    <h1 className=" text-xl font-bold">{user?.displayName || userData?.name}</h1>
                    <h1 className=" text-xl font-bold italic">{user?.email || userData?.email}</h1>
                </div>
            </div>
        </div>

    );
};

export default OverView;