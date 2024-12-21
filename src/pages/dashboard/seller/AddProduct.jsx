import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

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
        const sellerEmail = user.email;

        const product = { title, brand, stock, price, category, image, description, sellerEmail }
        console.log(product);

        // send jwt token 

        axios.post("http://localhost:3001/products/add", product)
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
        <div className=" p-4 bg-base-200 min-h-screen">
            <div>
                <h1 className="p-2 text-2xl font-bold text-center">Add Product</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Title"
                        className="input input-bordered"
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
                        className="input input-bordered"
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
                        className="input input-bordered"
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
                        className="input input-bordered"
                        {...register("stock", { required: true })}
                    />
                    {errors.stock && <p className=" text-red-500">Something went wrong!</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Image URL"
                        className="input input-bordered"
                        {...register("image", { required: true })}
                    />
                    {errors.image && <p className=" text-red-500">Something went wrong!</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered"
                        {...register("price", { required: true })}
                    />
                    {errors.price && <p className=" text-red-500">Something went wrong!</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="input input-bordered "
                        {...register("description", { required: true })}
                    />
                    {errors.description && <p className=" text-red-500">Something went wrong!</p>}
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-secondary">ADD PRODUCT</button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;