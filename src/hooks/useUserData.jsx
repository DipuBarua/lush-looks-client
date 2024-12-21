import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
    const [userData, setUserData] = useState({});
    const [user, loading] = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`http://localhost:3001/users/${user.email}`)
                .then(res => {
                    setUserData(res.data);
                })
        }

        if (user.email && !loading) {
            fetchUser();
        }
    }, [user, loading])

    return (userData);
};

export default useUserData;