import CurrentWeatherIcon from "../../resuable/icon/CurrentWeatherIcon";
import styles from "./weeklyWeather.module.css";
const WeeklyWeatherCard = (props) => {
    const { day, maxTemp, minTemp, weatherType } = props;
    return (
        <div className={styles.weekday_weather_wrapper}>
            <p className={styles.weekday_name}>{day}</p>
            <div className={styles.weekday_weather_image}>
                <CurrentWeatherIcon weather={weatherType} />
            </div>
            <div className={styles.weekday_temperature}>
                <span className={styles.weekday_max_temp}>
                    {Math.round(maxTemp)}
                    <sup>&deg;</sup>
                </span>
                {minTemp && (
                    <span className={styles.weekday_min_temp}>
                        {Math.round(minTemp)}
                        <sup>&deg;</sup>
                    </span>
                )}
            </div>
        </div>
    );
};
export default WeeklyWeatherCard;
