import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['allUsers'],
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

            <h1>
                view all users. Total users:  <span>{users.length}</span>
            </h1>
        </div>
    );
};

export default AllUsers;