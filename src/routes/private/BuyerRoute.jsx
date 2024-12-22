import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import LoadingPage from "../../pages/LoadingPage";

const BuyerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if (loading || !userData.role)
        return <LoadingPage></LoadingPage>

    if (user && userData.role === 'buyer') {
        return children;
    }

    return <Navigate to={'/logIn'} state={{ from: location }} replace></Navigate>
}
export default BuyerRoute;