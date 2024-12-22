import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyProductsTable = ({ index, item }) => {


    // title, brand, stock, price, category, image, description, sellerEmail

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
                            <img src={''} alt={''} />
                        </div>
                    </div>
                </div>
            </td>

            {/* title  */}
            <td>
                <div className="font-bold">{item?.title}</div>
            </td>

            {/* brand */}
            <td>
                <div className="">{item?.brand}</div>
            </td>

            {/* category */}
            <td>
                <div className="font-bold">{item?.category}</div>
            </td>

            {/* stock */}
            <td>
                <div className="">{item?.stock}</div>
            </td>

            {/* price */}
            <td>
                <div className="font-bold">{item?.price}</div>
            </td>

            {/* Edit btn */}
            <td>
                <Link to={`/dashboard/editProduct/${item._id}`} className="btn btn-ghost">
                    <FaPenSquare className=" text-xl text-green-600" />
                </Link>
            </td>

            {/* DELETE btn */}
            {/* <td>
                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost">
                    <FaTrash className=" text-xl text-red-600" />
                </button>
            </td> */}

            {/* Details view */}
            {/* <td>
                <button onClick={() => handleView(item._id)} className="btn border border-amber-700 hover:bg-gray-400">
                    <FaEye className=" text-xl" />
                </button>
            </td> */}

        </tr>
    );
};

export default MyProductsTable;