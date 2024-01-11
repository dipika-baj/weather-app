import "../index.css";
import Sidebar from "./Sidebar";
const Card = (props) => {
    const { weatherData } = props;

    return (
        <div className="weather-app-wrapper">
            <Sidebar
                currentWeather={weatherData.current}
                currentTimezone={weatherData.timezone}
            />
        </div>
    );
};
export default Card;
