import { secToDateConverter } from "../../../utils/utilFunc";
import CurrentWeatherIcon from "../../resuable/icon/CurrentWeatherIcon";
import styles from "./currentWeather.module.css";

const CurrentWeather = (props) => {
    const { currentWeather, currentTimezone } = props;

    return (
        <div className={styles.current_weather_wrapper}>
            <div className={styles.current_weather_type_image}>
                <CurrentWeatherIcon
                    weather={currentWeather.weather[0].description}
                />
            </div>
            <p className={styles.current_temperature}>
                {Math.round(currentWeather.temp)}
                <span className={styles.degree}>
                    <sup>&deg;C</sup>
                </span>
            </p>
            <div className={styles.current_time_day}>
                <span className={styles.current_day}>
                    {secToDateConverter("", currentTimezone, "date")},
                </span>
                <span className={styles.current_time}>
                    {secToDateConverter("", currentTimezone, "time")}
                </span>
            </div>
            <div className={styles.weather_type_wrapper}>
                <CurrentWeatherIcon
                    weather={currentWeather.weather[0].description}
                />
                <div className={styles.weather_type}>
                    {currentWeather.weather[0].description}
                </div>
            </div>
            <div className={styles.current_location_wrapper}>
                <img src="/location.jpg" />
                <p className={styles.current_location}>{currentTimezone}</p>
            </div>
        </div>
    );
};
export default CurrentWeather;
