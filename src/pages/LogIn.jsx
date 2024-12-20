import { useForm } from "react-hook-form";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogIn from "../components/socialLogIn/GoogleLogIn";

const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signIn, user } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // sign In with Auth 
        signIn(data.email, data.password)
            .then(res => {
                console.log(res);
                console.log("user", user);
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="w-full mx-auto max-w-md my-8 p-4 rounded-md shadow sm:p-8 bg-secondary dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">Dont have account?
                    <Link to={'/register'} className="focus:underline hover:underline text-gray-600"> Sign up here</Link>
                </p>


                <div className="my-6 space-y-4">
                    <GoogleLogIn />

                    <button role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                        <FaXTwitter size={20} />
                        <p>Login with Twitter</p>
                    </button>

                    <button role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                        <FaSquareFacebook size={20} />
                        <p>Login with Facebook</p>
                    </button>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-4">

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

                    </div>

                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Log In</button>

                </form>
            </div>
        </div >
    );
};

export default LogIn;