import { secToDateConverter } from "../../../utils/utilFunc";
import CurrentWeatherIcon from "../../resuable/icon/CurrentWeatherIcon";
import styles from "./currentWeather.module.css";

const CurrentWeather = (props) => {
    const { currentWeather, currentTimezone } = props;
    return (
        <div className={styles.current_weather_wrapper}>
            <div className={styles.current_weather_type_image}>
                <CurrentWeatherIcon weather={currentWeather.weather[0].main} />
            </div>
            <div className={styles.current_weather_detail}>
                <p className={styles.current_temperature}>
                    {Math.round(currentWeather.temp)}
                    <span className={styles.degree}>
                        <sup>&deg;C</sup>
                    </span>
                </p>
                <p className={styles.current_time_day}>
                    {secToDateConverter("", currentTimezone, "date")},&nbsp;
                    <span>
                        {secToDateConverter("", currentTimezone, "time")}
                    </span>
                </p>
                <div className={styles.current_weather_type}>
                    <CurrentWeatherIcon
                        weather={currentWeather.weather[0].main}
                    />
                    <p>{currentWeather.weather[0].description}</p>
                </div>
                <p className={styles.location}>{currentTimezone}</p>
            </div>
        </div>
    );
};
export default CurrentWeather;
