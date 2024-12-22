import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const result = await axios.get('')
            return result.data;
        }
    })
    return [products, refetch];
};

export default useProducts;