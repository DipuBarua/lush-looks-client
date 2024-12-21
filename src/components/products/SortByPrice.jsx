
const SortByPrice = ({ setSort }) => {
    return (
        <div>
            <select
                className="select select-bordered focus:outline-none rounded-md w-full max-w-xs"
                onChange={(e) => { setSort(e.target.value) }}
            >
                <option value='asc'>Low to High</option>
                <option value='dsc'>High to Low</option>
            </select>
        </div>
    );
};

export default SortByPrice;