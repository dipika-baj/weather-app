import "../index.css";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import { secToDateConverter } from "../utils/utilFunc";
import { useEffect } from "react";
const WeeklyWeather = (props) => {
    const { weeklyWeather, timeZone } = props;
    let weeklyWeather2 = weeklyWeather.slice();
    weeklyWeather2.shift();
    return (
        <div className="weekly-weather-wrapper">
            {weeklyWeather2.map((weather, index) => (
                <WeeklyWeatherCard
                    key={index}
                    day={new Intl.DateTimeFormat("en-US", {
                        timeZone: timeZone,
                        weekday: "short",
                    }).format(weather.dt * 1000)}
                    maxTemp={weather.temp.max}
                    minTemp={weather.temp.min}
                    weatherType={weather.weather[0].description}
                />
            ))}
        </div>
    );
};
export default WeeklyWeather;
