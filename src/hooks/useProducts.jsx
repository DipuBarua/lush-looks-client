import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['all-products'],
        queryFn: async () => {
            const result = await axios.get("https://lush-looks-server.vercel.app/all-products")
            return result.data
        }
    })

    return [products, refetch];
};

export default useProducts;