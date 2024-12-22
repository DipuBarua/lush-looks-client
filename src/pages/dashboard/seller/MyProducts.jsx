import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUserData from "../../../hooks/useUserData";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import MyProductsTable from "../../../components/dashboard/MyProductsTable";

const MyProducts = () => {
    const userData = useUserData();
    const { user } = useAuth()

    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['seller', 'my-products'],
    //     queryFn: async () => {
    //         const result = await axios.get(`https://lush-looks-server.vercel.app/seller/my-products/${userData.email}`)
    //         return result.data;
    //     }
    // })
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            await axios.get(`https://lush-looks-server.vercel.app/seller/my-products/${userData?.email}`)
                .then(res => {
                    console.log(res.data);
                    setProducts(res.data)
                })
        }; fetch();
    }, [userData]);

    console.log('myproduct', products);

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
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>category</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map((item, index) => <MyProductsTable
                                    key={item._id}
                                    index={index}
                                    item={item}
                                ></MyProductsTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;