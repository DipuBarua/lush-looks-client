import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const GoogleLogIn = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);

                const googleUser = {
                    name: res?.user?.displayName,
                    email: res?.user?.email,
                    role: 'buyer',
                    status: "approved",
                    image: res?.user?.photoURL,
                    wishlist: [],
                }

                axios.post('https://lush-looks-server.vercel.app/users', googleUser)
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
                    .catch(err => console.log(err))
            })
    }

    return (
        <>
            <button onClick={handleGoogleLogIn} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md">
                <FcGoogle size={20} />
                <p>Login with Google</p>
            </button>
        </>

    );
};

export default GoogleLogIn;