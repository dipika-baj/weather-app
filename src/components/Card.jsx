import "../index.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Card = (props) => {
    const { weatherData } = props;
    console.log(weatherData);
    return (
        <div className="weather-app-wrapper">
            <Sidebar
                currentWeather={weatherData.current}
                currentTimezone={weatherData.timezone}
            />
            <Main
                weeklyWeather={weatherData.daily}
                currentTimezone={weatherData.timezone}
            />
        </div>
    );
};
export default Card;
