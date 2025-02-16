import SearchIcon from "./SearchIcon"

const SearchTask = () => {
    return (
        <div className="flex items-center justify-center border-[0.8px] bg-[#1D1D1D] border-[#979797] gap-3 p-3">
            <SearchIcon />
            <input type="text" placeholder="Search for your task..." className="outline-none rounded-[4px] bg-transparent bg-[#1D1D1D] text-[#AFAFAF] w-full" />
        </div>
    )
}

export default SearchTask