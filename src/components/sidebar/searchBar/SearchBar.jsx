import { Search } from "lucide-react";
import styles from "./searchBar.module.css";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../context/WeatherContextProvider";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const { setCoordinates } = useContext(WeatherContext);

    console.log(search, searchData, isLoading);

    const changeSearch = (event) => {
        setSearch(event.target.value);
        event.target.value
            ? setShowSearchResult(true)
            : setShowSearchResult(false);
    };

    useEffect(() => {
        let trimmedSearch = search.trim();
        if (trimmedSearch) {
            const timer = setTimeout(() => {
                const api = `https://api.openweathermap.org/geo/1.0/direct?q=${trimmedSearch}&limit=5&appid=${
                    import.meta.env.VITE_APP_ID
                }`;
                if (!searchData) setIsLoading(true);
                fetch(api)
                    .then((response) => response.json())
                    .then((data) => {
                        setSearchData(data);
                    })
                    .catch((err) => {
                        console.log("Error:", err);
                    })
                    .finally(() => setIsLoading(false));
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setSearchData();
        }
    }, [search]);

    return (
        <>
            <div className={styles.search_bar_wrapper}>
                <label htmlFor="search">
                    <Search />
                </label>
                <input
                    autoComplete="off"
                    type="text"
                    id="search"
                    placeholder="Search for places..."
                    value={search}
                    onChange={changeSearch}
                />
            </div>
            {showSearchResult && (
                <ul className={styles.search_result}>
                    <SearchResult
                        searchData={searchData}
                        setShowSearchResult={setShowSearchResult}
                        isLoading={isLoading}
                        setCoordinates={setCoordinates}
                    />
                </ul>
            )}
        </>
    );
};
export default SearchBar;

const SearchResult = (props) => {
    const { searchData, setShowSearchResult, isLoading, setCoordinates } =
        props;
    if (isLoading) {
        return <li>Loading</li>;
    }

    if (searchData?.length === 0) {
        return <li>No city</li>;
    }
    return searchData?.map((data, index) => (
        <li
            key={index}
            onClick={() => {
                setCoordinates({ lat: data.lat, lon: data.lon });
                setShowSearchResult(false);
            }}
        >
            {data.name} , {data.country}
        </li>
    ));
};
