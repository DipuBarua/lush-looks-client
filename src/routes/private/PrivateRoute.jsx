import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingPage from "../../pages/LoadingPage";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading)
        return <LoadingPage></LoadingPage>

    if (user) {
        return children;
    }

    return <Navigate to={'/logIn'} state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;