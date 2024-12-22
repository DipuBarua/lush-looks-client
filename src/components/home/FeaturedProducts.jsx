import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            // await axios.get(`http://localhost:3001/all-products`)
            await axios.get(`https://lush-looks-server.vercel.app/all-products`)
                .then(res => {
                    console.log(res.data);
                    setProducts(res.data)
                })
        }; fetch();
    }, []);

    console.log("all:", products);
    console.log("all length", products.length);

    return (
        <div className=" min-h-screen">
            Showing some attractive featured products.
        </div>
    );
};

export default FeaturedProducts;