import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUserData from "../../../hooks/useUserData";
import { Helmet } from "react-helmet-async";
import MyProductsTable from "../../../components/dashboard/MyProductsTable";
import { useState } from "react";
import LoadingPage from "../../LoadingPage";

const MyProducts = () => {
    const userData = useUserData();
    const [loading, setLoading] = useState(true);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['my-products'],
        queryFn: async () => {
            const result = await axios.get(`https://lush-looks-server.vercel.app/seller/my-products/${userData?.email}`);
            setLoading(false);
            return result.data;
        }
    })


    console.log('myproduct', products);
    console.log('myproduct length:', products.length);

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>MyProducts | LushLooks Dashboard</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center my-7">List of All My Products</h1>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>category</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>View Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                loading ? <LoadingPage />
                                    :
                                    <>
                                        {
                                            products.map((item, index) => <MyProductsTable
                                                key={item._id}
                                                index={index}
                                                item={item}
                                                refetch={refetch}
                                            ></MyProductsTable>)
                                        }
                                    </>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;