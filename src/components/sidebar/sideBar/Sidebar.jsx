import SearchBar from "../searchBar/SearchBar";
import CurrentWeather from "../currentWeather/CurrentWeather";
import CurrentLocation from "../currentLocation/CurrentLocation";
import styles from "./sidebar.module.css";

const Sidebar = (props) => {
    const { unit } = props;

    return (
        <div className={styles.sidebar}>
            <SearchBar />
            <CurrentWeather unit={unit} />
            <CurrentLocation />
        </div>
    );
};
export default Sidebar;
