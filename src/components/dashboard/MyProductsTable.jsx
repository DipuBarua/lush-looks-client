import axios from "axios";
import { FaPenSquare } from "react-icons/fa";
import { FaEye, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyProductsTable = ({ index, item, refetch }) => {

    const token = localStorage.getItem('access-token');

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(res => {
                if (res.isConfirmed) {
                    axios.delete(`https://lush-looks-server.vercel.app/seller/delete-product/${id}`, {
                        headers: { authorization: `Bearer ${token}` }
                    })
                        .then(res => {
                            if (res.data) {
                                console.log(res.data.deletedCount > 0);
                                if (res.data) {
                                    Swal.fire({
                                        title: "Success",
                                        text: "Your Product successfully Deleted",
                                        icon: "success",
                                        timer: 1000,
                                        showConfirmButton: false,
                                    });
                                    refetch();
                                }
                            }
                        })
                        .catch(err => console.log(err));
                }
            })

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
                            <img src={item?.image} alt={'img'} />
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

            {/* Details view */}
            <td>
                <Link to={`/viewDetailsProduct/${item._id}`} className="btn btn-ghost">
                    <FaEye className=" text-xl" />
                </Link>
            </td>

            {/* Edit btn */}
            <td>
                <Link to={`/dashboard/editProduct/${item._id}`} className="btn btn-ghost">
                    <FaPenSquare className=" text-xl text-green-600" />
                </Link>
            </td>

            {/* DELETE btn */}
            <td>
                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost">
                    <FaTrash className=" text-xl text-red-600" />
                </button>
            </td>

        </tr>
    );
};

export default MyProductsTable;