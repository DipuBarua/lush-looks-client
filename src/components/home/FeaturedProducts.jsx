import useProducts from "../../hooks/useProducts";
import ProductCard from "../cards/ProductCard";

const FeaturedProducts = () => {

    const [products, refetch] = useProducts();

    return (
        <div className=" min-h-screen my-8">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leadi text-center">Our Featured Products</h1>
            </div>

            <div className="grid md:grid-cols-3 justify-center gap-7 px-12">
                {
                    products.slice(0, Math.floor(Math.random() * 10)).map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedProducts;