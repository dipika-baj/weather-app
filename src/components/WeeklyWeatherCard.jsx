import "../index.css";
import CurrentWeatherIcon from "../utils/CurrentWeatherIcon";
const WeeklyWeatherCard = (props) => {
    const { day, maxTemp, minTemp, weatherType } = props;
    return (
        <div className="weekday-weather-wrapper">
            <p className="weekday-name">{day}</p>
            <div className="weekday-weather-image">
                <CurrentWeatherIcon weather={weatherType} />
            </div>
            <div className="weekday-temperature">
                <span className="weekday-max-temp">
                    {Math.round(maxTemp)}
                    <sup>&deg;</sup>
                </span>
                <span className="weekday-min-temp">
                    {Math.round(minTemp)}
                    <sup>&deg;</sup>
                </span>
            </div>
        </div>
    );
};
export default WeeklyWeatherCard;
