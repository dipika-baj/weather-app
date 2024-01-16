import "../index.css";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import { secToDateConverter } from "../utils/utilFunc";
const WeeklyWeather = (props) => {
    const { weeklyWeather, timeZone } = props;
    return (
        <div className="weekly-weather-wrapper">
            {weeklyWeather.map((weather, index) => (
                <WeeklyWeatherCard
                    key={index}
                    day={weather.dt}
                    maxTemp={weather.temp.max}
                    minTemp={weather.temp.min}
                    weatherType={weather.weather.desc}
                />
            ))}
        </div>
    );
};
export default WeeklyWeather;
// [
//     {
//         dt: 1705406400,
//         sunrise: 1705391943,
//         sunset: 1705422034,
//         moonrise: 1705401240,
//         moonset: 1705446960,
//         moon_phase: 0.19,
//         temp: {
//             day: 2.69,ription
//             min: -0.32,
//             max: 3.09,
//             night: 0.76,
//             eve: 2.21,
//             morn: 0.12,
//         },
//         feels_like: {
//             day: -0.27,
//             night: 0.76,
//             eve: -0.35,
//             morn: -2.34,
//         },
//         pressure: 1008,
//         humidity: 54,
//         dew_point: -5.04,
//         wind_speed: 3.27,
//         wind_deg: 231,
//         wind_gust: 7.2,
//         weather: [
//             {
//                 id: 802,
//                 main: "Clouds",
//                 description: "scattered clouds",
//                 icon: "03d",
//             },
//         ],
//         clouds: 28,
//         pop: 0,
//         uvi: 0.68,
//     },
// ];
