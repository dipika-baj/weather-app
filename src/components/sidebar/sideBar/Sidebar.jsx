import SearchBar from "../searchBar/SearchBar";
import CurrentWeather from "../currentWeather/CurrentWeather";
import styles from "./sidebar.module.css";
const Sidebar = (props) => {
    const { currentWeather, currentTimezone } = props;
    console.log(currentTimezone, currentWeather);
    return (
        <div className={styles.current_weather_wrapper_left}>
            <SearchBar />
            <CurrentWeather
                currentWeather={currentWeather}
                currentTimezone={currentTimezone}
            />
        </div>
    );
};
export default Sidebar;
