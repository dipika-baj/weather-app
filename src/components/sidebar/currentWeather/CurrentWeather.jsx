import { useContext } from "react";
import { secToDateConverter } from "../../../utils/utilFunc";
import { changeToFahrenheit } from "../../../utils/utilFunc";
import CurrentWeatherIcon from "../../resuable/icon/CurrentWeatherIcon";
import styles from "./currentWeather.module.css";
import { WeatherContext } from "../../../context/WeatherContextProvider";

const CurrentWeather = (props) => {
    const { weatherData } = useContext(WeatherContext);
    const { unit } = props;
    const currentWeather = weatherData.current;

    return (
        <div className={styles.current_weather_wrapper}>
            <div className={styles.current_weather_type_image}>
                <CurrentWeatherIcon weather={currentWeather.weather[0].main} />
            </div>
            <div className={styles.current_weather_detail}>
                <p className={styles.current_temperature}>
                    {unit === "f"
                        ? Math.round(changeToFahrenheit(currentWeather.temp))
                        : Math.round(currentWeather.temp)}
                    <span className={styles.degree}>
                        <sup>&deg;{unit}</sup>
                    </span>
                </p>
                <p className={styles.current_time_day}>
                    {secToDateConverter("", weatherData.timezone, "date")}
                    ,&nbsp;
                    <span>
                        {secToDateConverter("", weatherData.timezone, "time")}
                    </span>
                </p>
                <div className={styles.current_weather_type}>
                    <CurrentWeatherIcon
                        weather={currentWeather.weather[0].main}
                    />
                    <p>{currentWeather.weather[0].description}</p>
                </div>
                <p className={styles.location}>{weatherData.timezone}</p>
            </div>
        </div>
    );
};
export default CurrentWeather;
