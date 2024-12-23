import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import LoadingPage from "../../pages/LoadingPage";

const AdminRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if (loading) {
        return <LoadingPage />;
    }

    if (user && userData.role === "admin")
        return children;

    return <Navigate to={"/logIn"} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;