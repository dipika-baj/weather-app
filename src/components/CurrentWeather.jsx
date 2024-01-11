import "../index.css";
import { Cloud } from "lucide-react";
const CurrentWeather = (props) => {
    const { currentWeather, currentTimezone } = props;

    return (
        <div className="current-weather-wrapper">
            <div className="current-weather-type-image">
                <Cloud />
            </div>
            <div className="current-temperature">
                <p>
                    {currentWeather.temp}
                    <sup>&deg;C</sup>
                </p>
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
