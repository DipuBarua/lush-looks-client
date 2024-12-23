import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import GoogleLogIn from "../components/socialLogIn/GoogleLogIn";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);
        const name = data.name;
        const email = data.email;
        const role = data.role;
        const status = data.role === 'buyer' ? "approved" : "pending";
        const image = ''; //need to update
        const wishlist = [];

        const userData = { name, email, role, status, image, wishlist }
        console.log(userData);

        // register with Auth 
        createUser(email, data.password)
            .then(() => {

                axios.post('https://lush-looks-server.vercel.app/users', userData)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your Account Created.",
                                showConfirmButton: false,
                                timer: 1500
                            });

                            navigate('/')
                        }
                    })
                    .catch(error => console.log(error, 'server problem'));
            })
            .catch(err => console.log(err, 'firebase faced problem'))
    }

    return (
        <div>
            <Helmet>
                <title>SignUp | LushLooks</title>
            </Helmet>
            <div className="w-full mx-auto max-w-md p-8 my-8 space-y-3 rounded-md bg-gray-700 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Create Your Account</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label className="block">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md border text-gray-900"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className=" text-red-500">Name required.</p>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            placeholder="User Email"
                            className="w-full px-4 py-3 rounded-md border text-gray-900"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className=" text-red-500">Email required</p>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block">Password</label>
                        <input
                            type="text"
                            placeholder="Create Password"
                            className="w-full px-4 py-3 rounded-md border text-gray-900"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                                pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                            })}
                        />
                        {errors.password?.type === "required" && <p className=" text-red-500">password required.</p>}
                        {errors.password?.type === "minLength" && <p className=" text-red-500">Password must have at least 8 characters!</p>}
                        {errors.password?.type === "pattern" && (
                            <span className=" text-red-500">password must have at least 1 upper case, 1 lower case, 1 numeric, 1 sepical(#,?,!,@,$,%,^,&,*,-) character.</span>
                        )}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block">Confirm Password</label>
                        <input
                            type="text"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-3 rounded-md border text-gray-900"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => {
                                    if (watch("password") !== value)
                                        return ('Password does not matched')
                                }
                            })}
                        />
                        {errors.confirmPassword && <p className=" text-red-500">Password does not matched!</p>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block">Role</label>
                        <select
                            className=" border w-full px-4 py-3 rounded-md text-gray-900"
                            {...register("role", { required: true })}
                            defaultValue={'buyer'}
                        >
                            <option value={"buyer"}>Buyer</option>
                            <option value={"seller"}>Seller</option>
                        </select>
                    </div>



                    <button type="submit" className="block w-full p-3 text-center rounded-sm border btn btn-secondary">Sign Up</button>

                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="p-3 rounded-sm">
                        <GoogleLogIn />
                    </button>
                    <button className="p-3 rounded-sm">
                        <FaXTwitter size={20} />
                    </button>
                    <button className="p-3 rounded-sm">
                        <FaSquareFacebook size={20} />
                    </button>

                </div>

                <p className="text-xs text-center sm:px-6 text-gray-400">Do not have an account?
                    <Link to={'/logIn'} className=" font-bold underline text-secondary"> LogIn</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;