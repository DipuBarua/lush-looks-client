import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import AllUsersTable from "../../../components/dashboard/AllUsersTable";

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['admin', 'users'],
        queryFn: async () => {
            const result = await axios.get("https://lush-looks-server.vercel.app/admin/users")
            return (result.data);
        }
    })

    console.log(users);

    return (
        <div>
            <Helmet>
                <title>AllUsers | LushLooks Dashboard</title>
            </Helmet>

            <div className=" p-7">
                <h1 className=" text-2xl font-bold text-center">All Users</h1>
                <p>Total Users: <span className=" text-secondary font-bold">{users.length}</span></p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Count Wishlist</th>
                                <th>Make Admin</th>
                                <th>Delete Acc.</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((item, index) => <AllUsersTable
                                    key={item._id}
                                    index={index}
                                    item={item}
                                ></AllUsersTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;