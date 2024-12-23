import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const EditProduct = () => {

    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    const { data: product = [], refetch } = useQuery({
        queryKey: ['seller', 'edit-product', id],
        queryFn: async () => {
            const result = await axios.get(`https://lush-looks-server.vercel.app/seller/edit-product/${id}`)
            return result.data;
        }
    })

    console.log('edit:', product);


    const updateSubmit = (data) => {
        console.log(data);
        refetch();
    }


    return (
        <div className=" p-4 bg-base-200 min-h-screen">
            <Helmet>
                <title>EditProduct | LushLooks Dashboard</title>
            </Helmet>
            <div>
                <h1 className="p-2 text-2xl font-bold text-center">Edit Your Product</h1>
            </div>
            <div className=" w-4/5 mx-auto">
                <form onSubmit={handleSubmit(updateSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Title"
                            defaultValue={product?.title}
                            className="input input-bordered"
                            {...register("title", { required: true })}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Brand"
                            defaultValue={product?.brand}
                            className="input input-bordered"
                            {...register("brand", { required: true })}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Category"
                            defaultValue={product?.category}
                            className="input input-bordered"
                            {...register("category", { required: true })}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Product Stock"
                            className="input input-bordered"
                            defaultValue={product?.stock}
                            {...register("stock", { required: true })}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Image URL"
                            className="input input-bordered"
                            defaultValue={product?.image}
                            {...register("image", { required: true })}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Price"
                            className="input input-bordered"
                            defaultValue={product?.price}
                            {...register("price", { required: true })}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Description"
                            className="input input-bordered "
                            defaultValue={product?.description}
                            {...register("description", { required: true })}
                        />
                    </div>

                    <div className="form-control my-6 grid md:grid-cols-2 gap-12">
                        <button type="submit" className="btn btn-outline text-secondary">Edit Product</button>
                        <button type="submit" className="btn btn-outline text-secondary">Cencle</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProduct;