import UVCard from "./uvIndex/UVCard";
import WindStatusCard from "./windStatus/WindStatusCard";
import SunRiseSetCard from "./sunRiseSet/SunRiseSetCard";
import HumidityCard from "./humidity/HumidityCard";
import VisibilityCard from "./visibility/VisibilityCard";
import Pressure from "./pressure/Pressure";
import WeatherCard from "../resuable/weatherCard/WeatherCard";
import styles from "./todayWeather.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContextProvider";

const TodayWeather = () => {
  const { weatherData } = useContext(WeatherContext);
  const { current: currentWeather, timezone } = weatherData;

  return (
    <>
      <h3 className="today-weather-title">Today's Weather</h3>
      <div className={styles.today_weather_wrapper}>
        <WeatherCard title="UV Index">
          <UVCard uvIndex={currentWeather.uvi} />
        </WeatherCard>
        <WeatherCard title="Wind Status">
          <WindStatusCard windStatus={currentWeather.wind_speed} />
        </WeatherCard>
        <WeatherCard title="Sunrise & Sunset">
          <SunRiseSetCard
            sunRise={currentWeather.sunrise}
            sunSet={currentWeather.sunset}
            timezone={timezone}
          />
        </WeatherCard>
        <WeatherCard title="Humidity">
          <HumidityCard humidity={currentWeather.humidity} />
        </WeatherCard>
        <WeatherCard title="Visibility">
          <VisibilityCard visibility={currentWeather.visibility} />
        </WeatherCard>
        <WeatherCard title="Pressure">
          <Pressure pressure={currentWeather.pressure} />
        </WeatherCard>
      </div>
    </>
  );
};
export default TodayWeather;
