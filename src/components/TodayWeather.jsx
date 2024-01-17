import "../index.css";
import UVCard from "./UVCard";
import WindStatusCard from "./WindStatusCard";
import SunRiseSetCard from "./SunRiseSetCard";
import HumidityCard from "./HumidityCard";
import VisibilityCard from "./VisibilityCard";
// import Pressure from "./Pressure";

const TodayWeather = (props) => {
    const { currentWeather } = props;
    return (
        <>
            <h3 className="today-weather-title">Today's Weather</h3>
            <UVCard uvIndex={currentWeather.uvi} />
            <WindStatusCard windStatus={currentWeather.wind_speed} />
            <SunRiseSetCard
                sunRise={currentWeather.sunrise}
                sunSet={currentWeather.sunset}
            />
            <HumidityCard humidity={currentWeather.humidity} />
            <VisibilityCard visibilty={currentWeather.visibility} />
        </>
    );
};
export default TodayWeather;

// clouds: 100
// dew_point: -0.34
// dt: 1705507145
// feels_like: -1.31
// humidity: 83
// pressure: 990
// sunrise: 1705478291
// sunset: 1705508528
// temp: 2.2
// uvi: 0
// visibility: 10000
// weather :[{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}]
// wind_deg: 10
// wind_speed: 3.6
