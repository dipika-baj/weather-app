import { secToDateConverter } from "../../../utils/utilFunc";
import CurrentWeatherIcon from "../../../utils/CurrentWeatherIcon";
import styles from "./currentWeather.module.css";
const CurrentWeather = (props) => {
    const { currentWeather, currentTimezone } = props;
    console.log(currentWeather, currentTimezone);
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
                <p className={styles.current_location}>{currentTimezone}</p>
            </div>
        </div>
    );
};
export default CurrentWeather;

// clouds: 100
// dew_point: 1.81
// dt: 1704987215
// feels_like: 2.45
// humidity: 84
// pressure: 1036
// sunrise: 1704960164
// sunset: 1704989590
// temp: 4.27
// uvi: 0
// visibility: 10000
// weather: {
//     0:{
//         description: "overcast clouds"
//         icon: "04d"
//         id: 804
//         main: "Clouds"
//     }
// }
// wind_deg: 40
// wind_speed: 2.06
