import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import FilterBar from "../components/products/FilterBar";
import LoadingPage from "./LoadingPage";
import { Helmet } from "react-helmet-async";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState('asc');
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            await axios.get(`https://lush-looks-server.vercel.app/products?title=${search}&sort=${sort}&category=${category}&brand=${brand}&page=${page}&limit=${6}`)
                .then(res => {
                    console.log('filter:', res.data);
                    setProducts(res.data.products);
                    setUniqueBrand(res.data.Brands);
                    setUniqueCategory(res.data.Categories);
                    setTotalPages(Math.ceil(res.data.totalProducts / 6));
                    setLoading(false);
                })
                .catch(err => console.log(err))
        }
        fetchProducts();
    }, [search, sort, category, brand, page]);


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

    // pagination 
    const handlePage = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
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

                    {/* pagination  */}
                    <div className="p-7 flex gap-7 justify-center items-center">
                        <button
                            onClick={() => handlePage(page - 1)}
                            className=" btn btn-outline rounded-full border"
                            disabled={page === 1}>
                            <MdOutlineKeyboardArrowLeft />
                        </button>
                        <h1 className=" font-medium">page {page} of {totalPages}</h1>
                        <button
                            onClick={() => handlePage(page + 1)}
                            className="btn btn-outline rounded-full border"
                            disabled={page === totalPages}>
                            <MdOutlineKeyboardArrowRight />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Products;