import { Search } from "lucide-react";
const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <label htmlFor="search">
                <Search />
            </label>
            <input type="text" id="search" placeholder="Search for places..." />
        </div>
    );
};
export default SearchBar;
