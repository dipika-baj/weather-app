import "../index.css";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
const Sidebar = (props) => {
    const { currentWeather, currentTimezone } = props;
    return (
        <div className="current-weather-wrapper-left">
            <SearchBar />
            <CurrentWeather
                currentWeather={currentWeather}
                currentTimezone={currentTimezone}
            />
        </div>
    );
};
export default Sidebar;
