import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleLogIn = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                navigate('/');
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