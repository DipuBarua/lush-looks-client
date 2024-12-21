import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleSearch }) => {
    return (
        <div>
            <form onSubmit={handleSearch} className=" w-full space-y-1 text-gray-800">

                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center ">

                        <button type="submit" className="p-2 rounded-l-md text-white bg-gray-600">
                            <CiSearch size={20} />
                        </button>

                    </span>

                    <input
                        type="search"
                        name="search"
                        placeholder="Search Products..."
                        className="w-32 p-2 pl-12 text-sm rounded-r-md sm:w-auto bg-gray-200 text-gray-800 focus:bg-gray-50 outline-none focus:border" />

                </div>
            </form>
        </div>
    );
};

export default SearchBar;