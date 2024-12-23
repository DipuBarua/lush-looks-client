import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { user } = useAuth();
    // console.log("user", user);

    const onSubmit = (data) => {
        const title = data.title;
        const brand = data.brand;
        const stock = parseFloat(data.stock);
        const price = parseFloat(data.price);
        const category = data.category;
        const image = data.image;
        const description = data.description;
        const email = user.email;

        const product = { title, brand, stock, price, category, image, description, email }
        console.log(product);

        // send jwt token 
        const token = localStorage.getItem('access-token');

        axios.post("https://lush-looks-server.vercel.app/products/add", product, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Your Product successfully added",
                        icon: "success",
                        timer: 1000,
                        showConfirmButton: false
                    });
                }
            }
            )

    }

    return (
        <div className=" bg-base-200 min-h-screen">
            <Helmet>
                <title>AddProduct | LushLooks Dashboard</title>
            </Helmet>
            <div>
                <h1 className="p-4 text-2xl font-bold text-center">Add Product</h1>
            </div>


            <div className="w-4/5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Title"
                            className="input input-bordered input-sm rounded-none"
                            {...register("title", { required: true })}
                        />
                        {errors.title && <p className=" text-red-500">Something went wrong!</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Brand"
                            className="input input-bordered input-sm rounded-none"
                            {...register("brand", { required: true })}
                        />
                        {errors.brand && <p className=" text-red-500">Something went wrong!</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Category"
                            className="input input-bordered input-sm rounded-none"
                            {...register("category", { required: true })}
                        />
                        {errors.category && <p className=" text-red-500">Something went wrong!</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Product Stock"
                            className="input input-bordered input-sm rounded-none"
                            {...register("stock", { required: true })}
                        />
                        {errors.stock && <p className=" text-red-500">Something went wrong!</p>}
                    </div>

                    <div className=" flex justify-between gap-4">
                        <div className=" w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered input-sm rounded-none"
                                    {...register("price", { required: true })}
                                />
                                {errors.price && <p className=" text-red-500">Something went wrong!</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Image URL"
                                    className="input input-bordered input-sm rounded-none"
                                    {...register("image", { required: true })}
                                />
                                {errors.image && <p className=" text-red-500">Something went wrong!</p>}
                            </div>
                        </div>

                        <div className="form-control h-full w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Description"
                                className="input input-bordered input-sm rounded-none"

                                {...register("description", { required: true })}
                            />
                            {errors.description && <p className=" text-red-500">Something went wrong!</p>}
                        </div>
                    </div>

                    <div className="form-control my-6">
                        <button type="submit" className="btn btn-secondary rounded-none w-1/2 mx-auto">ADD PRODUCT</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddProduct;