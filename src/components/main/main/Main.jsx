import NavBar from "../navbar/NavBar";
import WeeklyWeather from "../../weeklyWeather/WeeklyWeather";
import HourlyWeather from "../../hourlyWeather/HourlyWeather";
import TodayWeather from "../../today'sWeather/TodayWeather";
import style from "./main.module.css";
import { useState } from "react";
const Main = (props) => {
    const { weeklyWeather, hourlyWeather, currentTimezone, currentWeather } =
        props;
    const [activeForcast, setActiveForcast] = useState("week");
    const onActiveForcastChange = (forcast) => {
        setActiveForcast(forcast);
    };
    return (
        <div className={style.weather_detail_wrapper}>
            <NavBar onActiveForcastChange={onActiveForcastChange} />
            {activeForcast === "week" ? (
                <WeeklyWeather
                    weeklyWeather={weeklyWeather}
                    timezone={currentTimezone}
                />
            ) : (
                <HourlyWeather
                    hourlyWeather={hourlyWeather}
                    timezone={currentTimezone}
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
