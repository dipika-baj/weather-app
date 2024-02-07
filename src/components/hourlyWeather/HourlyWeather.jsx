import styles from "./hourlyWeather.module.css";
import WeeklyWeatherCard from "../resuable/weeklyWeatherCard/WeeklyWeatherCard";
import { changeToFahrenheit } from "../../utils/utilFunc";
const HourlyWeather = (props) => {
    const { hourlyWeather, timezone, unit } = props;
    const formatHourlyWeather = hourlyWeather.slice(0, 24);
    return (
        <div className={`${styles.hourly_weather_wrapper} scroll`}>
            {formatHourlyWeather.map((weather, index) => (
                <WeeklyWeatherCard
                    key={index}
                    day={new Intl.DateTimeFormat("en-US", {
                        timeZone: timezone,
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                    }).format(weather.dt * 1000)}
                    maxTemp={
                        unit === "f"
                            ? changeToFahrenheit(weather.temp)
                            : weather.temp
                    }
                    weatherType={weather.weather[0].main}
                />
            ))}
        </div>
    );
};

export default HourlyWeather;
