import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import FilterBar from "../components/products/FilterBar";
import LoadingPage from "./LoadingPage";
import { Helmet } from "react-helmet-async";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState('asc');
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);


    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            await axios.get(`https://lush-looks-server.vercel.app/products?title=${search}&sort=${sort}&category=${category}&brand=${brand}`)
                .then(res => {
                    console.log(res.data);
                    setProducts(res.data.products);
                    setUniqueBrand(res.data.Brands);
                    setUniqueCategory(res.data.Categories);
                    setLoading(false);
                })
                .catch(err => console.log(err))
        }
        fetchProducts();
    }, [search, sort, category, brand]);

    console.log('p:', products);
    console.log(sort, search, brand, category);


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
        setSearch(e.target.search.value);
    }

    const handleReload = () => {
        setSort('asc');
        setBrand('');
        setCategory('');
        setSearch('');
        window.location.reload();
    }


    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Products | LushLooks</title>
            </Helmet>
            <div className=" flex justify-between my-7 mx-2">
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>


            <div className=" grid md:grid-cols-12 gap-2">
                <div className="md:col-span-3 h-full">
                    <FilterBar
                        setBrand={setBrand}
                        uniqueBrand={uniqueBrand}
                        setCategory={setCategory}
                        uniqueCategory={uniqueCategory}
                        handleReload={handleReload}
                    ></FilterBar>
                </div>

                <div className="md:col-span-9 space-x-2">
                    <h1 className=" text-4xl text-center font-bold pb-7"> All Beauty Products</h1>
                    <div>
                        {
                            (loading) ? <LoadingPage></LoadingPage>
                                : <>
                                    {(products.length === 0)
                                        ? <div>
                                            <h1 className=" text-center text-2xl font-semibold">No Poduct Found...!</h1>
                                        </div>
                                        : <div className="grid md:grid-cols-3 gap-4 py-4">
                                            {
                                                products.map((product) => <ProductCard
                                                    key={product._id}
                                                    product={product}
                                                ></ProductCard>)}
                                        </div>
                                    }
                                </>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;