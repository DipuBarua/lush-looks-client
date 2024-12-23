import { FaChessKing, FaTrash } from "react-icons/fa";

const AllUsersTable = ({ index, item }) => {

    const handleUpdateToAdmin = (id) => {
        console.log(id);
    }

    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <tr >
            <th>
                <label>
                    {index + 1}
                </label>
            </th>

            {/* image  */}
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={item?.image} alt={''} />
                        </div>
                    </div>
                </div>
            </td>

            {/* name  */}
            <td>
                <div className="font-bold">{item?.name}</div>
            </td>

            {/* email
 */}
            <td>
                <div className="">{item?.email}</div>
            </td>

            {/* role */}
            <td>
                <div className="font-bold">{item?.role}</div>
            </td>

            {/* status */}
            <td>
                <div className="">{item?.status}</div>
            </td>

            {/* wishlist */}
            <td>
                <div className="font-bold">{item?.wishlist.length}</div>
            </td>

            {/* Edit Role btn */}
            <td>
                <button onClick={() => handleUpdateToAdmin(item._id)} className="btn border border-amber-700 hover:bg-gray-400">
                    <FaChessKing className=" text-xl" />
                </button>
            </td>

            {/* DELETE Acc. btn */}
            <td>
                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost">
                    <FaTrash className=" text-xl text-red-600" />
                </button>
            </td>

        </tr>
    );
};

export default AllUsersTable;