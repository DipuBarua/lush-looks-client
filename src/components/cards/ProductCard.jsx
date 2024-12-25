import axios from "axios";
import useUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isInWishlist, setLatestWishlist }) => {

    const { email } = useUserData();

    const handleWishlist = () => {
        axios.patch('https://lush-looks-server.vercel.app/wishlist/add', {
            userEmail: email,
            productId: product._id,
        })
            .then(res => {
                if (res.data.modifiedCount == 1) {
                    Swal.fire({
                        title: "Success",
                        text: "Added to wishlist",
                        icon: "success",
                        showConfirmButton: false,
                    });
                }
            })
            .catch(err => console.log(err, 'failed to add'));
    }

    const handleRemoveFromWishlist = () => {
        axios.patch('https://lush-looks-server.vercel.app/wishlist/remove', {
            userEmail: email,
            productId: product._id,
        })
            .then(res => {
                if (res.data.modifiedCount == 1) {
                    Swal.fire({
                        title: "Success",
                        text: "Removed from wishlist",
                        icon: "success",
                        showConfirmButton: false,
                    });
                    setLatestWishlist(prev => !prev)
                }
            })
            .catch(err => console.log(err, 'failed to add'));
    }


    return (
        <div className=" bg-slate-100 rounded-md border shadow-md">

            <Link to={`/viewDetailsProduct/${product._id}`} className="">
                <img
                    src={product?.image}
                    alt={product?.title}
                    className=" object-cover h-60 w-full rounded-t-md hover:border-b-4 hover:p-1" />
            </Link>


            <div className=" p-3 space-y-1">
                <h1 className="text-xl font-semibold ">{product?.title}</h1>
                <div className=" flex justify-between">
                    <h2 className=" font-medium">Price: $<span className=" text-orange-500">{product?.price}</span></h2>
                    <div className="badge badge-secondary">stock:{product?.stock}</div>
                </div>
                <div className=" flex gap-2 justify-between text-xs font-medium">
                    <h2>Category: {product?.category}</h2>
                    <h2 className=" text-pink-500 ">Brand: {product?.brand}</h2>
                </div>

                <h2 className=" text-sm font-light">Description:
                    {
                        product?.description.length <= 35
                            ? ` ${product?.description}`
                            : ` ${product?.description.slice(0, 35)} ...`
                    }
                </h2>

                <div className="">
                    {
                        (isInWishlist) ?
                            <button onClick={handleRemoveFromWishlist} className="btn btn-sm mt-4 w-full rounded-md bg-red-600 text-white">Remove from wishlist</button>
                            :
                            <>
                                {
                                    (email) &&
                                    <button onClick={handleWishlist} className="btn btn-outline btn-sm mt-4 w-full rounded-none">Add to wishlist</button>
                                }
                            </>


                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;