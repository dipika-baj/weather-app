import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
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
                currentWeather={weatherData.current}
            />
        </div>
    );
};
export default Card;
