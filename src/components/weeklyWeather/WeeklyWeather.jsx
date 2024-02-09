import WeeklyWeatherCard from "../resuable/weeklyWeatherCard/WeeklyWeatherCard";
import { changeToFahrenheit } from "../../utils/utilFunc";
import styles from "./weeklyWeather.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContextProvider";

const WeeklyWeather = (props) => {
    const { weatherData } = useContext(WeatherContext);
    const { unit } = props;
    const formatWeeklyWeather = weatherData.daily.slice();
    formatWeeklyWeather.shift();

    return (
        <div className={`${styles.weekly_weather_wrapper} scroll`}>
            {formatWeeklyWeather.map((weather, index) => (
                <WeeklyWeatherCard
                    key={index}
                    day={new Intl.DateTimeFormat("en-US", {
                        timeZone: weatherData.timezone,
                        weekday: "short",
                    }).format(weather.dt * 1000)}
                    maxTemp={
                        unit === "f"
                            ? changeToFahrenheit(weather.temp.max)
                            : weather.temp.max
                    }
                    minTemp={
                        unit === "f"
                            ? changeToFahrenheit(weather.temp.min)
                            : weather.temp.min
                    }
                    weatherType={weather.weather[0].main}
                />
            ))}
        </div>
    );
};
export default WeeklyWeather;
