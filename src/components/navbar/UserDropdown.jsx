
const UserDropdown = () => {

    return (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">

                <div className="avatar">
                    <div className="w-10 rounded-none">
                        <img src={'/profile.png'} alt="" />
                    </div>
                </div>

            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

export default UserDropdown;