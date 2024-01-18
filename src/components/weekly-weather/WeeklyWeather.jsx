import WeeklyWeatherCard from "./WeeklyWeatherCard";
const WeeklyWeather = (props) => {
    const { weeklyWeather, timeZone } = props;
    const formatWeeklyWeather = weeklyWeather.slice();
    formatWeeklyWeather.shift();
    return (
        <div className="weekly-weather-wrapper">
            {formatWeeklyWeather.map((weather, index) => (
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
