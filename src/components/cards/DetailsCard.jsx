import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const DetailsCard = () => {
    const { id } = useParams();

    const { data: product = [] } = useQuery({
        queryKey: ['details', id],
        queryFn: async () => {
            const result = await axios.get(`https://lush-looks-server.vercel.app/product/details/${id}`)
            return result.data;
        }
    })

    return (
        <div className=" min-h-screen m-12">
            <Helmet>
                <title>ViewDetails | LushLooks</title>
            </Helmet>
            <img
                src={product?.image}
                alt={product?.title}
                className=" object-contain w-1/2 h-1/3 mx-auto rounded-t-md" />

            <div className=" p-3 space-y-1">
                <h1 className="text-4xl font-semibold ">{product?.title}</h1>
                <div className=" md:flex justify-between">
                    <h2 className=" text-2xl font-bold">Price: $<span className=" text-orange-500">{product?.price}</span></h2>
                    <div className="badge md:badge-secondary font-semibold md:p-4">stock: {product?.stock}</div>
                </div>
                <div className=" text-2xl font-bold">
                    <h2 className=" text-pink-500 ">
                        {product?.category}
                        <span className=" text-black italic"> of </span>
                        {product?.brand}
                        <span className=" text-black"> Brand </span>
                    </h2>
                </div>

                <div className=" p-4 border-2">
                    <h1 className=" text-2xl font-semibold pb-2">Description Box</h1>
                    <h2 className=" text-lg text-gray-500">- {product?.description}</h2>
                </div>

            </div>
        </div>
    );
};

export default DetailsCard;