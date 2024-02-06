import WeeklyWeatherCard from "../resuable/weeklyWeatherCard/WeeklyWeatherCard";
import styles from "./weeklyWeather.module.css";
const WeeklyWeather = (props) => {
    const { weeklyWeather, timezone } = props;
    const formatWeeklyWeather = weeklyWeather.slice();
    formatWeeklyWeather.shift();
    return (
        <div className={`${styles.weekly_weather_wrapper} scroll`}>
            {formatWeeklyWeather.map((weather, index) => (
                <WeeklyWeatherCard
                    key={index}
                    day={new Intl.DateTimeFormat("en-US", {
                        timeZone: timezone,
                        weekday: "short",
                    }).format(weather.dt * 1000)}
                    maxTemp={weather.temp.max}
                    minTemp={weather.temp.min}
                    weatherType={weather.weather[0].main}
                />
            ))}
        </div>
    );
};
export default WeeklyWeather;
