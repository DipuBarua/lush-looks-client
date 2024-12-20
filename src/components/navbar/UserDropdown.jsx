import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {
    const { logOut, user } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/');
    }

    return (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">

                <div className="avatar">
                    <div className="w-10 rounded-none">
                        <img src={`${user?.photoURL}` || '/profile.png'} alt="" />
                    </div>
                </div>

            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-2">
                <li><p className=" mx-auto font-semibold bg-pink-100">{user?.displayName}</p></li>
                <li><button onClick={handleLogOut} className=" btn btn-sm">Log Out</button></li>
            </ul>
        </div>
    );
};

export default UserDropdown;