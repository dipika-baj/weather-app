import NavBar from "../navbar/NavBar";
import WeeklyWeather from "../../weeklyWeather/WeeklyWeather";
import HourlyWeather from "../../hourlyWeather/HourlyWeather";
import TodayWeather from "../../today'sWeather/TodayWeather";
import style from "./main.module.css";
import { useState } from "react";
const Main = (props) => {
    const {
        weeklyWeather,
        hourlyWeather,
        currentTimezone,
        currentWeather,
        unit,
        setUnit,
    } = props;
    const [activeForcast, setActiveForcast] = useState("week");
    return (
        <div className={style.weather_detail_wrapper}>
            <NavBar
                setActiveForcast={setActiveForcast}
                setUnit={setUnit}
                activeForcast={activeForcast}
                unit={unit}
            />
            {activeForcast === "week" ? (
                <WeeklyWeather
                    weeklyWeather={weeklyWeather}
                    timezone={currentTimezone}
                    unit={unit}
                />
            ) : (
                <HourlyWeather
                    hourlyWeather={hourlyWeather}
                    timezone={currentTimezone}
                    unit={unit}
                />
            )}

            <TodayWeather
                currentWeather={currentWeather}
                timezone={currentTimezone}
            />
        </div>
    );
};
export default Main;
