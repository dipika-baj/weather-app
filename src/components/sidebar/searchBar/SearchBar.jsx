import { Search } from "lucide-react";
import styles from "./searchBar.module.css";
const SearchBar = () => {
    return (
        <div className={styles.search_bar_wrapper}>
            <label htmlFor="search">
                <Search />
            </label>
            <input type="text" id="search" placeholder="Search for places..." />
        </div>
    );
};
export default SearchBar;
