import SearchBar from "../searchBar/SearchBar";
import CurrentWeather from "../currentWeather/CurrentWeather";
import CurrentLocation from "../currentLocation/currentLocation";
import styles from "./sidebar.module.css";
const Sidebar = (props) => {
    const { currentWeather, currentTimezone } = props;
    return (
        <div className={styles.sidebar}>
            <SearchBar />
            <CurrentWeather
                currentWeather={currentWeather}
                currentTimezone={currentTimezone}
            />
            <CurrentLocation currentTimezone={currentTimezone} />
        </div>
    );
};
export default Sidebar;
