import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await axios.get('http://localhost:3001/products')
            return result.data;
        }
    })
    return [products, refetch];
};

export default useProducts;