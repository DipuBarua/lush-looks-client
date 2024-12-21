
const ProductCard = ({product}) => {
    return (
        <div className=" bg-slate-100 rounded-md border shadow-md">

            <img
                src={product?.image}
                alt={product?.title}
                className=" object-cover h-60 w-full rounded-t-md" />

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

                {/* <div className="">
                    {
                        (isInWishlist) ?
                            <button onClick={handleRemoveFromWishlist} className="btn btn-sm mt-4 w-full rounded-md bg-red-600 text-white">Remove from wishlist</button>
                            :
                            <button onClick={handleWishlist} className="btn btn-outline btn-sm mt-4 w-full rounded-none">Add to wishlist</button>

                    }
                </div> */}
            </div>
        </div>
    );
};

export default ProductCard;