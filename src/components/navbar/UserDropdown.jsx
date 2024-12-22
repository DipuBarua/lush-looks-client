import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const UserDropdown = () => {
    const { logOut, user } = useAuth();
    const navigate = useNavigate();
    const { name, image } = useUserData();

    const handleLogOut = () => {
        logOut();
        navigate('/');
    }

    return (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">

                <div className="avatar">
                    <div className="w-10 rounded-none">
                        <img src={`${user?.photoURL}` || image || '/profile.png'} alt="" />
                    </div>
                </div>

            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-2">
                <li><h2 className=" mx-auto mb-2 font-semibold bg-pink-100 rounded-none">{user?.displayName || name}</h2></li>
                <li><Link to={'/dashboard/overView'} className=" btn btn-sm">Dashboard</Link></li>
                <li><button onClick={handleLogOut} className=" btn btn-sm bg-pink-300">Log Out</button></li>
            </ul>
        </div>
    );
};

export default UserDropdown;